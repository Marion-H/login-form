import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import dataForm from './reducer/dataForm'
import admin from './reducer/admin'
import changePassword from './reducer/changePassword'

const reducers = combineReducers({
    dataForm, admin, changePassword
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export default store