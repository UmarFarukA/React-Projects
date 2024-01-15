import { useEffect, useState } from "react";
import PageNav from "../../components/PageNav";
import styles from "./LoginPage.module.css";
import { useAuth } from "../../context/FakeAuthContext";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("talk2ufaz@gmail.com");
  const [password, setPassword] = useState("qwe123");
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (email && password) login(email, password);
  }

  useEffect(
    function () {
      if (isAuthenticated) navigate("/app", { replace: true });
    },
    [isAuthenticated, navigate]
  );

  return (
    <div className={styles.container}>
      <PageNav />
      <form className={styles.loginPanel} onSubmit={handleSubmit}>
        <div className={styles.inputField}>
          <label>Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.inputField}>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="login">Login</button>
      </form>
    </div>
  );
}
