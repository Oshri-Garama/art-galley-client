import React from "react";
import { MessageWrapper, MessageInfo } from "./Message.style";

const Message = ({ data, currentUserNickname }) => {
  const { nickname, message, time, chatInformation } = data;
  const isMyMessage = currentUserNickname === nickname;
  return (
    <MessageWrapper
      className={(!isMyMessage || chatInformation) && "guest-message"}
    >
      {!chatInformation && (
        <MessageInfo
          className={
            !isMyMessage && !chatInformation ? "guest-message" : "local-message"
          }
        >
          <span
            className={
              !isMyMessage && !chatInformation
                ? "guest-message"
                : "local-message"
            }
          >
            {isMyMessage ? "You" : nickname}
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
