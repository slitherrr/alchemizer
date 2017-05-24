import {combineReducers} from "redux"

const newAlchemist = {
    name: undefined,
    craftAlchemy: 0,
    editing: false,
    potions: []
}

const alchemistsById = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_ALCHEMIST':
            return {...state, [action.id]: alchemist(newAlchemist, action)}
        case 'START_EDIT_ALCHEMIST':
            return {...state, [action.id]: alchemist(state[action.id], action)}
        case 'FINISH_EDIT_ALCHEMIST':
            if (!action.name) {
                let {[action.id]: culledObject, ...prunedState} = state
                return prunedState
            } else {
                return {...state, [action.id]: alchemist(state[action.id], action)}
            }
        case 'REMOVE_ALCHEMIST':
            let {[action.id]: culledObject, ...prunedState} = state
            return prunedState
        case 'REMOVE_POTION':
            return {...state, [action.alchemistId]: alchemist(state[action.alchemistId], action)}
        case 'ADD_POTION':
            return {...state, [action.alchemistId]: alchemist(state[action.alchemistId], action)}
        default:
            return {...state, [action.id]: alchemist(state[action.id], action)}
    }
}

const alchemistsAllIds = (state = [], action) => {
     switch (action.type) {
        case 'ADD_ALCHEMIST':
            return [...state, action.id]
        case 'FINISH_EDIT_ALCHEMIST':
            if (!!action.name) {
                return state.filter(a => a.id !== action.id)
            } else {
                return state
            }
        case 'REMOVE_ALCHEMIST':
            return state.filter(a => a.id !== action.id)
        default:
            return state
    }
}

const alchemist = (state = newAlchemist, action) => {
    switch (action.type) {
        case 'ADD_ALCHEMIST':
            return {...state, editing: true}
        case 'START_EDIT_ALCHEMIST':
            return {...state, editing: true}
        case 'FINISH_EDIT_ALCHEMIST':
            return {...state,
                name: action.name,
                craftAlchemy: action.craftAlchemy,
                editing: false
            }
        case 'REMOVE_POTION':
            return {...state,
                potions: state.potions.filter(p => p.id !== action.id)
            }
        case 'ADD_POTION':
            return {...state,
                potions: [...state.potions, action.id]
            }
        default:
            return state
    }
}

export default combineReducers({byId: alchemistsById, allIds: alchemistsAllIds})
