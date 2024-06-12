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

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const nagivate = useNavigate();
  const handleLogin = async () => {
    console.log(id);
    console.log(password);
    //아직 api 데이터 없으므로
    //우선 출력만 해주는 로직을 써놓는다
    const response = await login({ id: id, password: password });
    //id, password로 써도 된다고 prettier에서 경고 보낼지도?
    //근데 auth에서도 축약해도 되나?
    console.log("로그인 API 응답값 : ", response);
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
        <Button onChange={(e) => {}}>로그인</Button>
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
