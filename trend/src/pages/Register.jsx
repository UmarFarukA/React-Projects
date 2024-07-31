import { useForm } from "react-hook-form";
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
const ErrorContainer = styled.span`
  background-color: rgb(248, 124, 124);
  color: white;
`;

function Register() {
  const {
    register,
    getValues,
    formState: { errors },
  } = useForm();
  return (
    <RegisterContainer>
      <h3>Join the trend</h3>
      <form>
        <InputControl>
          <Label>Name</Label>
          <InputField
            type="text"
            placeholder="Enter your name"
            {...register("name", {
              required: "Name is required",
              min: {
                value: 2,
                message: "Name must be at least two characters",
              },
            })}
          />
          {errors.name && (
            <ErrorContainer>{errors.name.message}</ErrorContainer>
          )}
        </InputControl>
        <InputControl>
          <Label>Email</Label>
          <InputField
            type="email"
            placeholder="Enter your email"
            {...register("email", {
              required: "A valid email is require",
            })}
          />
          {errors.name && (
            <ErrorContainer>{errors.email.message}</ErrorContainer>
          )}
        </InputControl>
        <InputControl>
          <Label>Password</Label>
          <InputField
            type="password"
            placeholder="**************"
            {...register("password", {
              required: "Password is required",
              min: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {errors.password && (
            <ErrorContainer>{errors.password.message}</ErrorContainer>
          )}
        </InputControl>
        <InputControl>
          <Label>Confirm Password</Label>
          <InputField
            type="password"
            placeholder="**************"
            {...register("confirmPassword", {
              required: "Confirm your password",
              validate: (val) =>
                val === getValues().password || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <ErrorContainer>{errors.confirmPassword.message}</ErrorContainer>
          )}
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
