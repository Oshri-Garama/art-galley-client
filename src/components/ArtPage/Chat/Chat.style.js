import styled from "styled-components";

export const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 5px;
  height: 97%;

  .back-button {
    align-self: flex-end;
    transform: rotate(180deg) scale(1.2);
  }

  .chat-content {
    display: flex;
    flex-direction: column;
  }

  .card-actions {
    display: flex;
    align-items: center;
    .chat-input {
      flex-basis: 90%;
      margin-right: 10px;
    }
  }

  .messages-wrapper {
    width: 100%;
    height: 650px;
    word-wrap: break-word;
    overflow-y: scroll;
  }
`;
