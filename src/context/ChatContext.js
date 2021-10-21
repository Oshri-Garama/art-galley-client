import { createContext, useState } from "react";
import io from "socket.io-client";
const socket = io.connect(process.env.REACT_APP_IO_SOCKET_SERVER_ORIGIN);

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const joinRoom = ({ roomId }) => {
    socket.emit("join_chat", { artId: roomId });
  };

  return (
    <ChatContext.Provider value={{ joinRoom }}>{children}</ChatContext.Provider>
  );
};
