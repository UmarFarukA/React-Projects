import { useState } from "react";
import Button from "../../ui/Button";
import { useLogin } from "./useLogin";

function LoginForm() {
  const { login, isLoading } = useLogin();

  const [email, setEmail] = useState("user@example.com");
  const [password, setPassword] = useState("pass@123");

  const handleClick = (e) => {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  };

  return (
    <form className="mx-5 sm:mx-8 md:mx-12" onSubmit={handleClick}>
      <div className="flex flex-col gap-2 mt-2 mb-4">
        <label className="text-stone-700">Email address</label>
        <input
          type="text"
          name="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-stone-200 px-1 py-2 rounded-md outline-none focus:ring focus:ring-stone-600"
          disabled={isLoading}
        />
      </div>
      <div className="flex flex-col gap-2 mt-2 mb-4">
        <label className="text-stone-700">Password</label>
        <input
          type="password"
          name="password"
          placeholder="***********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-stone-200 px-1 py-2 rounded-md outline-none focus:ring focus:ring-stone-600"
          disabled={isLoading}
        />
      </div>
      <Button type="stretch" disabled={isLoading}>
        {isLoading ? "Authenticating..." : "Login"}
      </Button>
    </form>
  );
}

export default LoginForm;
