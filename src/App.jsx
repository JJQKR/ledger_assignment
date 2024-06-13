import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import Profile from "./pages/Profile";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [user, setUser] = useState(null);

  console.log("로그인된 유저 정보 :", user);
  //새로고침 시 null이 되어야 하고
  // 근데 새로고침하더라도
  // getUseInfo함수에서 (auth.js에 써있듯이)
  //로컬 스토리지 안에 있는 accessToken을 바탕으로
  // 유저 정보를 다시 불러오는 api가 호출되고
  // 응답값이 무언가있을것이다
  // reponse.data;

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout user={user} setUser={setUser} />}>
            {/* 로그인햇을 때만 이렇게 */}
            <Route
              index
              element={
                <Home
                  user={user}
                  expenses={expenses}
                  setExpenses={setExpenses}
                />
              }
            />
            <Route
              path="/detail/:id"
              element={
                <Detail expenses={setExpenses} setExpenses={setExpenses} />
              }
            />
            <Route
              path="/profile/"
              element={<Profile user={user} setUser={setUser} />}
            />
            <Route path="/login/" element={<Login setUser={setUser} />} />
            <Route path="/signup/" element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
