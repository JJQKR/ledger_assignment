import React, { Profiler, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { Provider } from "react-redux";
import store from "./redux/slices/store";
import uuid4 from "uuid4";
import { getUserInfo } from "./lib/api/auth";
import Layout from "./components/Layout";
import Profile from "./components/Profile";

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: uuid4(),
      date: Date.now(),
      item: "",
      amount: 1,
      description: "",
    },
  ]);
  //이거 임의로 넣은 값이라 확인해봐야하고

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
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout user={user} setUser={setUser} />}>
              {/* 로그인햇을 때만 */}
              <Route
                index
                element={
                  <Home expenses={setExpenses} setExpenses={setExpenses} />
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
              {/* 여기서는 signup이고 auth에서는 register야? */}
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
