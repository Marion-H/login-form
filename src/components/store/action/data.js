import { ADD_DATA } from "./actionType";

export const setDataForm = (e, keyName) => {
    return (dispatch, getState) => {
    e.preventDefault();
    const state = getState();
    const { dataForm } = state;
    return dispatch({
      type: ADD_DATA,
      payload: {...dataForm, [keyName]: e.target.value}
    });
  };
};
