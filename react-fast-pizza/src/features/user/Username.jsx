import { useSelector } from "react-redux";

export default function Username() {
  const username = useSelector((store) => store.user.username);
  return <div className="hidden md:block">{username}</div>;
}
