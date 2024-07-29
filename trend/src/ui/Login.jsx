import { Link } from "react-router-dom";
import styled from "styled-components";

const LoginContainer = styled.div`
  align-self: center;
  justify-self: flex-start;
  color: #fff;
  display: flex;
  flex-direction: column;
  width: 70%;

  h3 {
    font-size: 3.2rem;
  }

  div {
    margin-bottom: 1rem;
  }
`;

const InputControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const Label = styled.label`
  font-size: 1.2rem;
`;

const InputField = styled.input`
  padding: 0.6rem 0.6rem;
  border: none;
  outline: none;
  border-radius: 0.4rem;
`;

const Button = styled.button`
  background-color: #b3b3b3;
  width: 100%;
  padding: 0.6rem 0;
  border-radius: 0.4rem;
  color: #000;

  &:hover {
    background-color: #e6e6e6;
  }
`;

const Paragraph = styled.p`
  color: white;
`;

function Login() {
  return (
    <LoginContainer>
      <h3>Get Informed with Trend</h3>
      <div>
        <InputControl>
          <Label>Username</Label>
          <InputField type="text" placeholder="Username" />
        </InputControl>
        <InputControl>
          <Label>Password</Label>
          <InputField type="password" placeholder="***********" />
        </InputControl>
        <Button>Login</Button>
      </div>
      <Paragraph>
        Join the trend{" "}
        <Link to="/register" className="register">
          here
        </Link>
      </Paragraph>
    </LoginContainer>
  );
}

export default Login;
