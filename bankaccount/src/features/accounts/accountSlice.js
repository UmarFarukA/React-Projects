const initialAccount = {
  balance: 0.0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

export default function accountReducer(state = initialAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
        isLoading: false,
      };
    case "account/withdraw":
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case "account/loan":
      return {
        ...state,
        loan: state.loan + action.payload.amount,
        loanPurpose: action.payload.purpose,
      };
    case "account/convertingCurrency":
      return { ...state, isLoading: true };
    default:
      return state;
  }
}

export function deposit(amount, currency) {
  if (currency === "USD")
    return {
      type: "account/deposit",
      payload: Number(amount),
    };

  return async function (dispatch, getState) {
    dispatch({
      type: "account/convertingCurrency",
    });
    const rest = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await rest.json();
    dispatch({
      type: "account/deposit",
      payload: Number(data.rates.USD),
    });
  };
}

export function withdraw(amount) {
  return {
    type: "account/withdraw",
    payload: Number(amount),
  };
}

export function requestLoan(amount, purpose) {
  return {
    type: "account/loan",
    payload: {
      amount: amount,
      purpose: purpose,
    },
  };
}
