import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit: {
      prepare(amount, currency) {
        return {
          payload: { amount, currency },
        };
      },
      reducer(state, action) {
        state.balance += action.payload.amount;
      },
    },

    withdraw(state, action) {
      state.balance -= action.payload;
    },
    requestLoan: {
      prepare(amount, purpose) {
        return {
          payload: { amount, purpose },
        };
      },
      reducer(state, action) {
        state.balance += action.payload.amount;
        state.loanPurpose = action.payload.purpose;
        state.loan = action.payload.amount;
      },
    },

    payLoan(state) {
      state.balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },
  },
});

// export function deposit(amount, currency) {
//   if (currency === "USD")
//     return {
//       type: "account/deposit",
//       payload: Number(amount),
//     };

//   return async function (dispatch, getState) {
//     const rest = await fetch(
//       `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
//     );
//     const data = await rest.json();
//     const converted = data.rates.USD;
//     dispatch({
//       type: "account/deposit",
//       payload: Number(converted),
//     });
//   };
// }

export const { deposit, withdraw, requestLoan, payLoan } = accountSlice.actions;

export default accountSlice.reducer;

/*
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
*/
