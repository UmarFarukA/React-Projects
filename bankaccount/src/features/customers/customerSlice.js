const initialCustomers = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

export default function customerReducer(state = initialCustomers, action) {
  switch (action.type) {
    case "customer/create":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId: action.payload.id,
        createdAt: action.payload.createAt,
      };
    case "customer/updateName":
      return {
        ...state,
        fullName: action.payload,
      };
    default:
      return state;
  }
}

export function createCustomer(name, id) {
  return {
    type: "customer/create",
    payload: {
      fullName: name,
      id: id,
      createAt: new Date().toISOString(),
    },
  };
}

export function updateName(newName) {
  return {
    type: "customer/updateName",
    payload: newName,
  };
}
