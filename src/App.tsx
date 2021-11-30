import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import LayoutPage from "./Layout";
import { Provider } from "react-redux";
import { store } from "./store";

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <LayoutPage />
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
