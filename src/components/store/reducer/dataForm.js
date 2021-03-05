import { ADD_DATA, DELETE_DATA } from "../action/actionType";

const initialState = {
  username: "",
  password: "",
  email: "",
  mobile: "",
};

const dataForm = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_DATA:
      return payload;
    case DELETE_DATA:
      return initialState;
    default:
      return state;
  }
};

export default dataForm;
