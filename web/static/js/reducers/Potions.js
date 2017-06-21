import {combineReducers} from "redux"

const newPotion = {
    id: undefined,
    spellId: undefined,
    cl: undefined,
    casterClass: undefined,
}

const potionsById = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_POTION':
            return {...state, [action.id]: potion(newPotion, action)}
        case 'EDIT_POTION':
            return {...state, [action.id]: potion(state[action.id], action)}
        case 'REMOVE_POTION':
            let {[action.id]: culledObject, ...prunedState} = state
            return prunedState
        default:
            return state
    }
}

const potionsAllIds = (state = [], action) => {
    switch (action.type) {
        case 'ADD_POTION':
            return [...state, action.id]
        case 'REMOVE_POTION':
            return state.filter(p => p !== action.id)
        default:
            return state
    }
}

const potion = (state = newPotion, action) => {
    switch (action.type) {
        case 'ADD_POTION':
            return {...newPotion, id: action.id}
        case 'EDIT_POTION':
            if(action.attribute === undefined) {
            }
            return {...state, [action.attribute]: action.newValue}
        default:
            return state
    }
}

export default combineReducers({byId: potionsById, allIds: potionsAllIds})
