import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import dataForm from './reducer/dataForm'


const reducers = combineReducers({
    dataForm
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export default store