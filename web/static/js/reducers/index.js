import { combineReducers } from 'redux'
import Alchemists from './Alchemists'
import Potions from './Potions'

const rootReducer = combineReducers({
    alchemists: Alchemists,
    potions: Potions
})

export default rootReducer
