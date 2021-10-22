import styled from "styled-components";

export const ChatWrapper = styled.div`
  position: relative;
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

export const NicknameSelectPopupWrapper = styled.div`
  position: absolute;
  padding: 20px;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 300px;
  box-shadow: 0 5px 20px rgb(0 10 200 / 0.2);
  background-color: white;
`;

export const NicknameSelectPopupContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  .nickname-input {
    margin-bottom: 10px;
  }
`;
