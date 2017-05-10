const newPotion = {
    id: undefined,
    potionType: undefined,
    cl: undefined
}

const potions = (state=[], action) => {
    switch (action.type) {
        case 'ADD_POTION':
            return [...state, {...newPotion, id: action.id}]
        case 'REMOVE_POTION':
            return state.filter(p => p.id !== action.id)
        default:
            return state
    }
}

export default potions
