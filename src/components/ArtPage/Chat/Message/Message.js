import React from "react";
import { MessageWrapper, MessageInfo } from "./Message.style";

const Message = ({ data, currentUser }) => {
  const { username, message, time, chatInformation } = data;
  const isMyMessage = currentUser === username;
  return (
    <MessageWrapper
      className={!isMyMessage && !chatInformation && "guest-message"}
    >
      {!chatInformation && (
        <MessageInfo
          className={!isMyMessage && !chatInformation && "guest-message"}
        >
          <span
            className={
              isMyMessage || chatInformation ? "local_message" : "guest-message"
            }
          >
            {isMyMessage ? "You" : username}
          </span>
          <span className="time">{time}</span>
        </MessageInfo>
      )}
      <span className={chatInformation ? "info-message" : "chat-message"}>
        {message}
      </span>
    </MessageWrapper>
  );
};

export default Message;
