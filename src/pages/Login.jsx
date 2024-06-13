import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { login } from "../lib/api/auth";

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #b6d6f4;
  border-radius: 8px;
`;
const InputGroup = styled.div`
  margin-bottom: 15px;
  label {
    display: block;
    margin-bottom: 5px;
  }
  input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
`;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #02b383;
  border-radius: 4px;
  border: none;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;

  & :disabled {
    background-color: #808080ad;
  }
`;
const ToggleButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #9ddecc;
  color: black;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Login = ({ setUser }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async () => {
    const { userId, nickname, avatar } = await login({
      id: id,
      password: password,
      //auth의 login 함수에서 id, password가 넣어주는 값인 건 알겠는데
      //여기서 매개변수로도 필요한 이유 모르겠음
    });
    console.log("로그인 API 응답값 : ", userId, nickname, avatar);
    alert("로그인 성공!");
    setUser({ userId, nickname, avatar });
    navigate("/");
  };

  return (
    <>
      <Container>
        <InputGroup>
          <label htmlFor="id">아이디</label>
          <input
            type="text"
            onChange={(e) => {
              setId(e.target.value);
            }}
            placeholder="아이디"
          />
        </InputGroup>

        <InputGroup>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="비밀번호"
          ></input>
        </InputGroup>
        <Button onClick={handleLogin}>로그인</Button>
        <ToggleButton
          onClick={(e) => {
            nagivate("/signup");
          }}
        >
          회원가입
        </ToggleButton>
      </Container>
    </>
  );
};

export default Login;
