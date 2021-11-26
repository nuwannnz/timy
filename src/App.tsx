import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import LayoutPage from "./Layout";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <LayoutPage />
      </BrowserRouter>
    </div>
  );
};

export default App;
