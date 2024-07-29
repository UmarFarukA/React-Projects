import { Link } from "react-router-dom";
import styled from "styled-components";

const RegisterContainer = styled.div`
  display: grid;
  grid-template-rows: auto;
  padding: none;
  gap: 1rem;
  place-content: center;
  width: 100dvw;
  height: 100dvh;
  margin-left: auto;
  margin-right: auto;
  background-color: #333333;

  h3 {
    font-size: 3.2rem;
    color: white;
    margin-bottom: 1rem;
  }

  p {
    color: white;
  }
`;

const InputField = styled.input`
  padding: 0.6rem 0.6rem;
  border: none;
  outline: none;
  border-radius: 0.4rem;
`;

const Label = styled.label`
  font-size: 1.2rem;
  color: white;
`;

const InputControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-bottom: 0.6rem;
`;

const Button = styled.button`
  background-color: #b3b3b3;
  width: 100%;
  padding: 0.6rem 0;
  border-radius: 0.4rem;
  color: #000;
  margin-top: 0.4rem;

  &:hover {
    background-color: #e6e6e6;
  }
`;

function Register() {
  return (
    <RegisterContainer>
      <h3>Join the trend</h3>
      <form>
        <InputControl>
          <Label>Name</Label>
          <InputField type="text" placeholder="Enter your name" />
        </InputControl>
        <InputControl>
          <Label>Email</Label>
          <InputField type="email" placeholder="Enter your email" />
        </InputControl>
        <InputControl>
          <Label>Password</Label>
          <InputField type="password" placeholder="**************" />
        </InputControl>
        <InputControl>
          <Label>Confirm Password</Label>
          <InputField type="password" placeholder="**************" />
        </InputControl>
        <Button>Join</Button>
      </form>
      <p>
        Already have an account? Login{" "}
        <Link to="/" className="login">
          here
        </Link>{" "}
      </p>
    </RegisterContainer>
  );
}

export default Register;
