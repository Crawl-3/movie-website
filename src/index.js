import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { Store } from "./store/Context";

ReactDOM.render(
    <React.StrictMode>
        <Store>
            <App />
        </Store>
    </React.StrictMode>,
    document.getElementById("root")
);
