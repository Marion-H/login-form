import { ADD_DATA } from "./actionType";

export const setDataForm = (e, name) => {
    return (dispatch, getState) => {
        console.log(name)
    e.preventDefault();
    const state = getState();
    const { dataForm } = state;
    return dispatch({
      type: ADD_DATA,
      payload: {...dataForm, [name]: e.target.value}
    });
  };
};
