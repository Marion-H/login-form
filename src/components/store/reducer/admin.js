import { LOGIN, LOGOUT, USERNAME, UUID } from "../action/actionType";

const initialState = {
  token: "",
  uuid: "",
  username: "",
};

const admin = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN:
      const { token, nameRes} = payload
      return { ...state, token, username: nameRes };
    case LOGOUT:
      sessionStorage.clear();
      return initialState;
    case UUID:
      return { ...state, uuid: payload };
    case USERNAME:
        return { ...state, username: payload };
    default:
      return state;
  }
};

export default admin;
