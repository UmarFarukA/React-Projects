import { useSelector } from "react-redux";

function Balance() {
  const curBalance = useSelector((store) => store.account.balance);
  return <div className="balance">${Math.ceil(curBalance)}</div>;
}

export default Balance;
