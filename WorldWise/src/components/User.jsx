import { useNavigate } from "react-router-dom";
import styles from "./User.module.css";
import { useAuth } from "../context/FakeAuthContext";
import Button from "./Button";

export default function User() {
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  function handleClick() {
    logout();
    navigate("/");
  }

  return (
    <div className={styles.user}>
      {/* <img src={user.avatar} alt={user.username} /> */}
      <span>Welcome, {user.username}</span>
      <Button type="primary" onClick={handleClick}>
        Logout
      </Button>
    </div>
  );
}
