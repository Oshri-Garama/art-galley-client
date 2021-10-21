import React from "react";
import { MessageWrapper, MessageInfo } from "./Message.style";

const Message = ({ data }) => {
  const { username, message, time, chatInformation } = data;

  return (
    <MessageWrapper>
      {!chatInformation && (
        <MessageInfo>
          <span className="username">{username}</span>
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
