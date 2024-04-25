import Heading from "../ui/Heading";
import Logo from "../ui/Logo";
import LoginForm from "../features/authentication/LoginForm";

function Login() {
  return (
    <div className="flex flex-col justify-center m-auto w-full sm:w-2/3 md:w-2/3 lg:w-2/5  pt-8 space-y-6">
      <Logo />
      <Heading type="h4">Log in to your account</Heading>

      <LoginForm />
    </div>
  );
}

export default Login;
