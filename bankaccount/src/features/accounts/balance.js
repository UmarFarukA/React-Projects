// import { useSelector } from "react-redux";

function Balance({ curBalance }) {
  // const curBalance = useSelector((store) => store.account.balance);
  console.log(curBalance);
  return <div className="balance">${Number(Math.ceil(curBalance))}.00</div>;
}

export default Balance;
