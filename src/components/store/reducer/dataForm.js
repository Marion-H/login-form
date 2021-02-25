import { ADD_DATA } from "../action/actionType";


const initialState = {
    name:"",
    password:"",
    email:"",
    mobile:""
}

const dataForm = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case ADD_DATA:
            return payload
        default:
            return state
    }
}

export default dataForm