import { ADD_DATA } from "./actionType";

export const setPassword = (e) => {
    return (dispatch, getState) => {
        const state = getState()
        const {dataForm} = state
        e.preventDefault();
        return dispatch({
            type: ADD_DATA,
            payload: { ...dataForm, password: e.target.value },
        });
    }
  };
