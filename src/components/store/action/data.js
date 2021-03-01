import { ADD_DATA, CHANGE_PASSWORD } from "./actionType";

export const setDataForm = (e, keyName) => {
  return (dispatch, getState) => {
    e.preventDefault();
    const state = getState();
    const { dataForm } = state;
    return dispatch({
      type: ADD_DATA,
      payload: { ...dataForm, [keyName]: e.target.value },
    });
  };
};

export const setChangePassword = (e, keyName) => {
  return (dispatch, getState) => {
    e.preventDefault();
    const state = getState();
    const { changePassword } = state;
    return dispatch({
      type: CHANGE_PASSWORD,
      payload: { ...changePassword, [keyName]: e.target.value },
    });
  };
};
