const initialCustomers = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

function customerReducer(state = initialCustomers, action) {
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

function createCustomer(name, id, createAt) {
  return {
    type: "customer/create",
    payload: {
      fullName: name,
      id: id,
      createAt: createAt,
    },
  };
}

function updateName(newName) {
  return {
    type: "customer/updateName",
    payload: newName,
  };
}
