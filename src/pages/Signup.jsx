import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { register } from "../lib/api/auth";
import styled from "styled-components";

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

const Signup = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const nagivate = useNavigate();

  const handleRegister = async () => {
    //유효성검사
    if (id.length < 4 || id.length > 10) {
      alert("아이디는 최소 4글자, 최대 9글자로 작성해주세요.");
      return;
    }
    if (password.length < 4 || password.length > 15) {
      alert("비밀번호는 최소 4글자, 최대 14글자로 작성해주세요.");
      return;
    }
    if (nickname.length < 2 || nickname.length > 10) {
      alert("아이디는 최소 2글자, 최대 9글자로 작성해주세요.");
      return;
    }

    //api호출 전에 위에서 유효성 검증 해줌

    //api 호출을 진짜로 하는 아래 부분

    const response = await register({
      //async 함수이므로 여기서 호출시에도 await 걸어줌
      id: id, //두번째가 state로 관리되는 id
      password: password, //두번쨰가 state로 관리되는 password
      nickname: nickname, //두번째가 state로 관리되는 nickname
    });

    console.log("회원가입 API 응답값 : ", response);
    //왜 여기서 굳이 response로 받아주지?
    //쓰려고?

    if (response) {
      confirm("회원가입이 완료되었습니다.");
      nagivate("/login");
    }
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
        <InputGroup>
          <label htmlFor="nickname">닉네임</label>
          <input
            type="text"
            onChange={(e) => {
              setNickname(e.target.value);
            }}
            placeholder="비밀번호"
          ></input>
        </InputGroup>
        <Button onClick={handleRegister}>회원가입</Button>
        <ToggleButton
          onClick={(e) => {
            nagivate("/login");
          }}
        >
          돌아가기
        </ToggleButton>
      </Container>
    </>
  );
};

export default Signup;
