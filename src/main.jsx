import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import QueryClientSetup from "./QueryClientSetup.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientSetup>
      {/* 이 안에 App을 둠으로써 탠스택쿼리가 제공하는 걸 모든 전체 어플리케이션에 적용시킬 수 있음    */}
      <App />
    </QueryClientSetup>
  </React.StrictMode>
);
