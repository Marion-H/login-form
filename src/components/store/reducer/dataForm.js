import { ADD_DATA } from "../action/actionType";


const initialState = {}

const dataForm = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case ADD_DATA:
            return { ...state, payload}
        default:
            return state
    }
}

export default dataForm