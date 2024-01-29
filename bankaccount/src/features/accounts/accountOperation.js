import { useState } from "react";
import Button from "../../components/Button";
import InputFields from "../../components/InputFields";
import SelectField from "../../components/selectFields";
import { useDispatch, useSelector } from "react-redux";
import Balance from "./balance";
import { deposit, withdraw, requestLoan, payLoan } from "./accountSlice";

function AccountOperation() {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [currency, setCurrency] = useState("USD");
  const fullName = useSelector((store) => store.customer.fullName);
  const account = useSelector((store) => store.account);

  const dispatch = useDispatch();

  function handleDeposit() {
    dispatch(deposit(Number(depositAmount)));
    setDepositAmount("");
    setCurrency("USD");
  }

  function handleWithdraw() {
    dispatch(withdraw(withdrawAmount));
    setWithdrawAmount("");
  }

  function handleRquestLoan() {
    dispatch(requestLoan(Number(loanAmount)));
    setLoanAmount("");
    setLoanPurpose("");
  }

  function handlePayLoan() {
    dispatch(payLoan());
  }

  return (
    <div className="account">
      <div className="account-header">
        <h3>👏 Welcome, {fullName}</h3>
        <Balance curBalance={account.balance} />
      </div>
      <h4>Your account Operations</h4>
      <div className="operations">
        <div className="deposit">
          <InputFields
            labelCaption="Deposit"
            value={Number(depositAmount)}
            onChange={(e) => setDepositAmount(e.target.value)}
          />
          <SelectField
            currencyType={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">Dollar</option>
            <option value="EUR">Euro</option>
            <option value="CAD">CAD</option>
          </SelectField>
          <Button onClick={handleDeposit}>Deposit {depositAmount}</Button>
        </div>
        <div className="withdraw">
          <InputFields
            labelCaption="Withdraw"
            value={withdrawAmount}
            onChange={(e) => setWithdrawAmount(e.target.value)}
          />
          <Button onClick={handleWithdraw}>Withdraw</Button>
        </div>
        <div className="loan">
          <InputFields
            labelCaption="Request Loan"
            value={Number(loanAmount)}
            onChange={(e) => setLoanAmount(e.target.value)}
          />
          <InputFields
            labelCaption="Loan Purpose  "
            value={loanPurpose}
            onChange={(e) => setLoanPurpose(e.target.value)}
          />
          <Button type="request" onClick={handleRquestLoan}>
            Request Loan
          </Button>
        </div>
        <div>
          <span>Pay back ${account.loan}</span>{" "}
          <Button onClick={handlePayLoan}>Pay Loan</Button>
        </div>
      </div>
    </div>
  );
}

export default AccountOperation;
