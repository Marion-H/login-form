import { ADD_DATA, DELETE_DATA, LOGOUT } from "../action/actionType";

const initialState = {
  name: "",
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
      case LOGOUT:
        sessionStorage.clear()
        return {}
    default:
      return state;
  }
};

export default dataForm;
