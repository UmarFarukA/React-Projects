import { useState } from "react";
import Button from "../../components/Button";
import InputFields from "../../components/InputFields";
import SelectField from "../../components/selectFields";
import { useSelector } from "react-redux";

function AccountOperation() {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const fullName = useSelector((store) => store.customer.fullName);
  return (
    <div className="account">
      <h3>👏 Welcome, {fullName}</h3>
      <h4>Your account Operations</h4>
      <div className="operations">
        <div className="deposit">
          <InputFields
            labelCaption="Deposit"
            value={depositAmount}
            onChange={(e) => setDepositAmount(e.target.value)}
          />
          <SelectField>
            <option>NGN - Naira</option>
            <option>US - Dollar</option>
            <option>EU - Euro</option>
          </SelectField>
          <Button>Deposit {depositAmount}</Button>
        </div>
        <div className="withdraw">
          <InputFields
            labelCaption="Withdraw"
            value={withdrawAmount}
            onChange={(e) => setWithdrawAmount(e.target.value)}
          />
          <Button>Withdraw</Button>
        </div>
        <div className="loan">
          <InputFields
            labelCaption="Request Loan"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          />
          <InputFields
            labelCaption="Loan Purpose  "
            value={loanPurpose}
            onChange={(e) => setLoanPurpose(e.target.value)}
          />
          <Button type="request">Request Loan</Button>
        </div>
        <div>
          <span>Pay back $X</span> <Button>Pay Loan</Button>
        </div>
      </div>
    </div>
  );
}

export default AccountOperation;
