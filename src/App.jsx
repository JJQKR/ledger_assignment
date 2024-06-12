import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { Provider } from "react-redux";
import store from "./redux/slices/store";

const App = () => {
  const [expenses, setExpenses] = useState();

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Home expenses={setExpenses} setExpenses={setExpenses} />
              }
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
      </Provider>
    </>
  );
};

export default App;
