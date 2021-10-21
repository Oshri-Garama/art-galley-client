import React, { useContext, useEffect, useState } from "react";
import {
  IconButton,
  TextField,
  Button,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import { Send, ArrowBack } from "@material-ui/icons";
import isEmpty from "lodash/isEmpty";
import { ChatWrapper } from "./Chat.style";
import { ChatContext } from "../../../context/ChatContext";
import moment from "moment";

const getFormattedMessage = ({ message, username, roomId }) => {
  return {
    roomId,
    username,
    message,
    time: moment().format("LT"),
  };
};

const Chat = ({ art, history }) => {
  const { socket, joinRoom, leaveRoom, sendMessage } = useContext(ChatContext);
  const [currentMessage, setCurrentMessage] = useState("");
  const [currentMessages, setCurrentMessages] = useState([]);
  const [username, setUsername] = useState("oshri");

  const sendChatMessage = async () => {
    if (!isEmpty(currentMessage)) {
      const data = getFormattedMessage({
        roomId: art.id,
        username,
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
      username,
      message: `${username} just left the room`,
    });

    await leaveRoom(data);
    setCurrentMessages((list) => [...list, data]);
  };

  useEffect(() => {
    if (!isEmpty(art)) {
      const data = getFormattedMessage({
        roomId: art.id,
        username,
        message: `${username} just entered the room`,
      });
      joinRoom(data);
    }
  }, [art, username, joinRoom, leaveRoom, sendMessage]);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setCurrentMessages((list) => [...list, data]);
    });
  }, [socket]);

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
          {currentMessages.map((data, index) => (
            <div key={index} className="message">
              {data.message}
            </div>
          ))}
        </CardContent>
        <CardActions className="card-actions">
          <TextField
            id="standard-basic"
            className="chat-input"
            label="Standard"
            variant="standard"
            value={currentMessage}
            onChange={(event) => setCurrentMessage(event.target.value)}
          />
          <Button
            endIcon={<Send />}
            variant="contained"
            size="small"
            color="primary"
            onClick={() => sendChatMessage()}
          >
            Send
          </Button>
        </CardActions>
      </ChatWrapper>
    </Card>
  );
};

export default Chat;
