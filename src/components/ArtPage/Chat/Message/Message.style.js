import styled from "styled-components";

export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  align-items: flex-end;
  padding: 10px;
  box-shadow: 0 3px 10px rgb(0 10 200 / 0.2);

  &.guest-message {
    align-items: flex-start;
  }
  .chat-message {
    font-size: 18px;
    white-space: pre-line;
  }

  .info-message {
    color: rgb(150 120 220);
    font-weight: bold;
  }
`;

export const MessageInfo = styled.div`
  display: flex;
  font-weight: bold;
  margin-bottom: 5px;

  &.local-message {
    flex-direction: row-reverse;
  }

  .local-message {
    color: blue;
    margin-left: 5px;
  }
  .guest-message {
    color: blue;
    margin-right: 5px;
  }

  .time {
    font-size: 13px;
  }
  /* border: 1px solid red; */
`;
