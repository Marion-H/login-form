import { CHANGE_PASSWORD } from "../action/actionType";

const initialState = {
  newPassword: "",
  confirmPassword: "",
};

const changePassword = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_PASSWORD:
      return payload;
    default:
      return state;
  }
};

export default changePassword;
