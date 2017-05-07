import { combineReducers } from 'redux'

let counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

let colorToggle = (state = 'white', action) => {
    switch (action.type) {
        case 'COLORTOGGLE':
            console.log(state)
            return state === 'white' ? 'blue' : 'white'
        default:
            return state
    }
}

const alchemizerApp = combineReducers({
    counter,
    colorToggle,
})

export default alchemizerApp
