// import {initialState as potionInitialState, potions} from './Potions'

const newAlchemist = {
    id: undefined,
    name: undefined,
    craftAlchemy: 0,
    editing: false,
    potions: []
}

let nextAlchemistId = 0

const exactlyOneUndefined = (state) => {
    return [... state.filter(a => a.id !== undefined), newAlchemist]
}

const alchemists = (state = [newAlchemist], action) => {
    switch (action.type) {
        case 'ADD_OR_EDIT_ALCHEMIST':
            return state.map(a => alchemist(a, action))
        case 'FINISH_ADD_OR_EDIT_ALCHEMIST':
            return exactlyOneUndefined(state.map(a => alchemist(a, action)))
        case 'REMOVE_ALCHEMIST':
            return exactlyOneUndefined(state.map(a => alchemist(a, action)))
        case 'REMOVE_POTION':
            return state.map(a => alchemist(a, action))
        case 'ADD_POTION':
            return state.map(a => alchemist(a, action))
        default:
            return state.map(a => alchemist(a, action))
    }
}

const alchemist = (state = newAlchemist, action) => {
    switch (action.type) {
        case 'ADD_OR_EDIT_ALCHEMIST':
            if(action.id !== state.id) {
                return state
            } else {
                return {...state, editing: true}
            }

        case 'FINISH_ADD_OR_EDIT_ALCHEMIST':
            if(state.id !== action.id) {
                return state
            } else {
                const newState = (!!action.name ? {
                    name: action.name,
                    craftAlchemy: action.craftAlchemy,
                    editing: false,
                    id: (action.id === undefined ? nextAlchemistId++ : state.id)
                } : newAlchemist)

                return Object.assign({}, state, newState)
            }
        case 'REMOVE_ALCHEMIST':
            if(state.id !== action.id) {
                return state
            } else {
                return {...state, id: undefined}
            }
        case 'REMOVE_POTION':
            if(state.id !== action.alchemistId) {
                return state
            } else {
                return {...state, potions: state.potions.filter(p => p.id !== action.id)}
            }
        case 'ADD_POTION':
            if(state.id !== action.alchemistId) {
                return state
            } else {
                return {...state, potions: [...state.potions, action.id]}
            }
        default:
            return state
    }
}

export default alchemists
