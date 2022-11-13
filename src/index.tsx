import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";

import "./index.css";
import App from "./components/App";
const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <BrowserRouter>
   <App />
  </BrowserRouter>
);
