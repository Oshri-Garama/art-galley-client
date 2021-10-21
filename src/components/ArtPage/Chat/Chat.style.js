import styled from "styled-components";

export const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 5px;
  height: 98%;

  .back-button {
    align-self: flex-end;
    transform: rotate(180deg) scale(1.2);
  }

  .chat-content {
    display: flex;
    flex-direction: column;
  }

  .card-actions {
    align-self: flex-end;
  }
`;
