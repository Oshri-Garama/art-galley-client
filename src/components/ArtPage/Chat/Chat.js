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

const Chat = ({ art, history }) => {
  const { connect, joinRoom, sendMessage } = useContext(ChatContext);
  const [currentMessage, setCurrentMessage] = useState("");

  const sendChatMessage = async () => {
    if (!isEmpty(currentMessage)) {
      const data = {
        roomId: art.id,
        userName: "Oshri",
        message: currentMessage,
        time: moment().format("LT"),
      };
      await sendMessage(data);
    }
  };

  useEffect(() => {
    if (!isEmpty(art)) {
      joinRoom({ roomId: art.id });
    }
  }, [art]);

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
            onClick={() => history.replace("/")}
            className="back-button"
            color="primary"
          >
            <ArrowBack />
          </IconButton>
          <div>BODY</div>
        </CardContent>
        <CardActions className="card-actions">
          <TextField
            id="standard-basic"
            className="chat-input"
            label="Standard"
            variant="standard"
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
