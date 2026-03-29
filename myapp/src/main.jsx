import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import CounterProvider from "./contexts/counterContext.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CounterProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </CounterProvider>
    </BrowserRouter>
  </StrictMode>,
);
