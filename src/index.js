import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { GalleryProvider } from "./context/GalleryContext";
import { ChatProvider } from "./context/ChatContext";
import Routes from "./router";
import { GlobalStyles } from "./styles/GlobalStyles.style";

const BasicComponent = () => {
  return (
    <>
      <GlobalStyles />
      <GalleryProvider>
        <ChatProvider>
          <Router>
            <Routes />
          </Router>
        </ChatProvider>
      </GalleryProvider>
    </>
  );
};

const rootElement = document.getElementById("root");

ReactDOM.render(<BasicComponent />, rootElement);
