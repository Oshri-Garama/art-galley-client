import React, { useContext, useEffect, useState } from "react";
import Message from "./Message/Message";
import {
  IconButton,
  TextField,
  Button,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import { Send, ArrowBack, TransitEnterexit } from "@material-ui/icons";
import isEmpty from "lodash/isEmpty";
import {
  ChatWrapper,
  NicknameSelectPopupWrapper,
  NicknameSelectPopupContent,
} from "./Chat.style";
import { ChatContext } from "../../../context/ChatContext";
import moment from "moment";
import ScrollToBottom from "react-scroll-to-bottom";

const getFormattedMessage = ({
  message,
  nickname,
  roomId,
  chatInformation,
}) => {
  return {
    roomId,
    nickname,
    message,
    chatInformation,
    time: moment().format("LT"),
  };
};

const Chat = ({ art, history }) => {
  const {
    socket,
    joinRoom,
    leaveRoom,
    sendMessage,
    getCurrentNickname,
    setCurrentNickname,
  } = useContext(ChatContext);
  const [currentMessage, setCurrentMessage] = useState("");
  const [currentMessages, setCurrentMessages] = useState([]);
  const [showNicknameSelectPopup, setShowNicknameSelectPopup] = useState(
    isEmpty(getCurrentNickname())
  );
  const [nickname, setNickname] = useState(getCurrentNickname());

  const onSubmitNickname = () => {
    if (!isEmpty(art) && !isEmpty(nickname)) {
      setShowNicknameSelectPopup(false);
      setCurrentNickname(nickname);
    }
  };

  const sendChatMessage = async () => {
    if (isEmpty(nickname)) {
      return setShowNicknameSelectPopup(true);
    }

    if (!isEmpty(currentMessage)) {
      const data = getFormattedMessage({
        roomId: art.id,
        nickname,
        message: currentMessage,
      });
      setCurrentMessage("");
      await sendMessage(data);
      setCurrentMessages((list) => [...list, data]);
    }
  };

  const onGoBack = async () => {
    history.replace("/");
    const data = getFormattedMessage({
      roomId: art.id,
      nickname,
      message: `${nickname} just left the room`,
      chatInformation: true,
    });

    await leaveRoom(data);
    setCurrentMessages((list) => [...list, data]);
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setCurrentMessages((list) => [...list, data]);
    });
  }, [socket]);

  useEffect(() => {
    if (!isEmpty(getCurrentNickname())) {
      const data = getFormattedMessage({
        roomId: art.id,
        nickname,
        message: `${nickname} just entered the room`,
        chatInformation: true,
      });
      joinRoom(data);
    }
  }, [getCurrentNickname, joinRoom, art, nickname]);

  return (
    <Card
      id={art.id}
      sx={{
        marginLeft: 1,
        boxShadow:
          "0px 2px 1px -1px yellow, 0px 1px 1px 0px red, 0px 1px 3px 0px blue",
        flexBasis: "40%",
        height: 800,
      }}
    >
      <ChatWrapper>
        <CardContent className="chat-content">
          <IconButton
            onClick={() => onGoBack()}
            className="back-button"
            color="primary"
          >
            <ArrowBack />
          </IconButton>
          <ScrollToBottom className="messages-wrapper">
            {currentMessages.map((data, index) => (
              <Message key={index} data={data} currentUser={nickname} />
            ))}
          </ScrollToBottom>
          {showNicknameSelectPopup && (
            <NicknameSelectPopupWrapper>
              <span>Please provide a nickname to continue</span>
              <NicknameSelectPopupContent>
                <TextField
                  id="nickname"
                  inputProps={{ maxLength: 30 }}
                  className="nickname-input"
                  placeholder="Your nickname"
                  onChange={(event) => setNickname(event.target.value)}
                  onKeyPress={(event) => {
                    event.key === "Enter" && onSubmitNickname();
                  }}
                />
                <Button
                  className="join-button"
                  endIcon={<TransitEnterexit />}
                  variant="contained"
                  size="large"
                  color="primary"
                  onClick={() => onSubmitNickname()}
                >
                  Join chat room
                </Button>
              </NicknameSelectPopupContent>
            </NicknameSelectPopupWrapper>
          )}
        </CardContent>
        <CardActions className="card-actions">
          <TextField
            id="filled-multiline-static"
            className="chat-input"
            placeholder="Type a message..."
            multiline
            rows="2"
            autoComplete={false}
            value={currentMessage}
            disabled={showNicknameSelectPopup}
            onChange={(event) => setCurrentMessage(event.target.value)}
            onKeyPress={(event) => {
              event.key === "Enter" && sendChatMessage();
            }}
          />
          <Button
            endIcon={<Send />}
            variant="contained"
            size="small"
            color="primary"
            onClick={() => sendChatMessage()}
            disabled={showNicknameSelectPopup}
          >
            Send
          </Button>
        </CardActions>
      </ChatWrapper>
    </Card>
  );
};

export default Chat;
