import { useSelector } from "react-redux";

import CreateCustumer from "./features/customers/createCustomer";
import AccountOperation from "./features/accounts/accountOperation";
import "./index";

function App() {
  const fullName = useSelector((store) => store.customer.fullName);
  return (
    <div className="App">
      <h1>🏦 The React-Redux Bank 🔯</h1>
      {fullName === "" ? <CreateCustumer /> : <AccountOperation />}
    </div>
  );
}

export default App;
