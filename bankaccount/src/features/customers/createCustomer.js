import { useState } from "react";
import Button from "../../components/Button";
import InputFields from "../../components/InputFields";
import { useDispatch } from "react-redux";
import { createCustomer } from "./customerSlice";

function CreateCustumer() {
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(createCustomer(fullName, nationalId));
  }
  return (
    <div className="create-customer">
      <h3>Create new customer</h3>
      <div className="customer-fields">
        <InputFields
          labelCaption="Customer Full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <InputFields
          labelCaption="National Id"
          value={nationalId}
          onChange={(e) => setNationalId(e.target.value)}
        />
        <Button onClick={handleClick} type="create">
          Create New Customer
        </Button>
      </div>
    </div>
  );
}

export default CreateCustumer;
