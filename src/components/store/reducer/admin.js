import { LOGIN, LOGOUT, UUID } from "../action/actionType";

const initialState = {
  token: "",
  uuid: "",
  name: "",
};

const admin = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN:
      const { token, nameRes} = payload
      return { ...state, token, name: nameRes };
    case LOGOUT:
      sessionStorage.clear();
      return initialState;
    case UUID:
      return { ...state, uuid: payload };
    default:
      return state;
  }
};

export default admin;
