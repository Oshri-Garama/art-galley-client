import { createContext, useState } from "react";
import io from "socket.io-client";
const socket = io.connect(process.env.REACT_APP_SERVER_ORIGIN);

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [nickname, setNickname] = useState("");

  const joinRoom = async (data) => {
    await socket.emit("join_chat", data);
  };

  const leaveRoom = async (data) => {
    await socket.emit("leave_chat", data);
  };

  const sendMessage = async (data) => {
    await socket.emit("send_message", data);
  };

  const getCurrentNickname = () => nickname;

  return (
    <ChatContext.Provider
      value={{
        joinRoom,
        leaveRoom,
        sendMessage,
        socket,
        getCurrentNickname,
        setCurrentNickname: setNickname,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
