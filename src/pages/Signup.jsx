import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    if (id.length < 4 || id.length > 10) {
      alert("아이디는 최소 4글자, 최대 9글자로 작성해주세요.");
      return;
    }
    //api호출 전에 위에서 유효성 검증 해줌
    //api 호출을 진짜로 하는 아래 부분
    console.log("회원가입 API호출!");

    if (password.length < 4 || password.length > 15) {
      alert("비밀번호는 최소 4글자, 최대 14글자로 작성해주세요.");
      return;
    }

    if (nickname.length < 2 || nickname.length > 10) {
      alert("아이디는 최소 2글자, 최대 9글자로 작성해주세요.");
      return;
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
