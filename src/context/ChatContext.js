import { createContext, useState } from "react";
import io from "socket.io-client";
const socket = io.connect(process.env.REACT_APP_IO_SOCKET_SERVER_ORIGIN);

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const joinRoom = ({ roomId }) => {
    socket.emit("join_chat", { artId: roomId });
  };

  // Should implement and supply when react component is unmounted
  const disconnect = () => {};

  const sendMessage = async (data) => {
    await socket.emit("send_message", data);
  };

  return (
    <ChatContext.Provider value={{ joinRoom, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
};
