import { createRoot } from "react-dom/client";
import App from "./components/app/app";
import "./index.css";
import "./components/app/app";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
