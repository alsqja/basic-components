import React, { useState } from "react";
import styled from "styled-components";
import TextField from "./TextField";

function Login() {
  const [id, setId] = useState("");
  const [passwd, setPasswd] = useState("");
  return (
    <Container>
      <Title>로그인</Title>
      <TextField title="아이디" value={id} onChange={setId} />
      <TextField title="비밀번호" value={passwd} onChange={setPasswd} />
      <LoginButton>로그인</LoginButton>
    </Container>
  );
}

const Container = styled.div`
  width: 372px;
  height: 554px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const Title = styled.div`
  width: 292px;
  font-size: 22px;
  margin-bottom: 36px;
`;

const LoginButton = styled.div`
  width: 292px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 40px;
  background-color: lightblue;
  :hover {
    background-color: lightblue;
  }
`;

export default Login;
