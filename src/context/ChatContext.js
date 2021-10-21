import { createContext } from "react";
import io from "socket.io-client";
const socket = io.connect(process.env.REACT_APP_IO_SOCKET_SERVER_ORIGIN);

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const joinRoom = async (data) => {
    socket.emit("join_chat", { artId: data.roomId });
    sendMessage(data);
  };

  const leaveRoom = async (data) => {
    socket.emit("leave_chat", { artId: data.roomId });
    sendMessage(data);
  };

  const sendMessage = async (data) => {
    await socket.emit("send_message", data);
  };

  return (
    <ChatContext.Provider
      value={{
        joinRoom,
        leaveRoom,
        sendMessage,
        socket,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
