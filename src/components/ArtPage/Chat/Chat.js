import React, { useContext, useEffect } from "react";
import {
  IconButton,
  Button,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import { Send, ArrowBack } from "@material-ui/icons";
import isEmpty from "lodash/isEmpty";
import { ChatWrapper } from "./Chat.style";
import { ChatContext } from "../../../context/ChatContext";

const Chat = ({ art, history }) => {
  const { connect, joinRoom } = useContext(ChatContext);

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
          ** ChatWrapper + Chat component here **
          <div>Me: Test</div>
          <div>You: Test</div>
        </CardContent>
        <CardActions className="card-actions">
          <Button
            endIcon={<Send />}
            variant="contained"
            size="small"
            color="primary"
          >
            Send
          </Button>
        </CardActions>
      </ChatWrapper>
    </Card>
  );
};

export default Chat;
