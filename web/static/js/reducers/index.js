import { combineReducers } from 'redux'
import Alchemists from './Alchemists'

const rootReducer = combineReducers({
    alchemists: Alchemists
})

export default rootReducer
