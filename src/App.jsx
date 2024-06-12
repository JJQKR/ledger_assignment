import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home expenses={setExpenses} setExpenses={setExpenses} />}
          >
            <Route
              path="/detail/:id"
              element={
                <Detail expenses={setExpenses} setExpenses={setExpenses} />
              }
            />
            <Route path="/login/" element={<Login />} />
            <Route path="/signup/" element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
