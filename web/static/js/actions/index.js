let nextPotionId = 0
let nextAlchemistId = 0

export const addAlchemist = () => {
    return {
        type: 'ADD_ALCHEMIST',
        id: nextAlchemistId++
    }
}

export const startEditAlchemist = (id) => {
    return {
        type: 'START_EDIT_ALCHEMIST',
        id: id
    }
}

export const finishEditAlchemist = (id, name, craftAlchemy) => {
    return {
        type: 'FINISH_EDIT_ALCHEMIST',
        name: name,
        craftAlchemy: craftAlchemy,
        id: id
    }
}

export const removeAlchemist = (id) => {
    return {
        type: 'REMOVE_ALCHEMIST',
        id: id
    }
}

export const addPotion = (alchemistId) => {
    return {
        type: 'ADD_POTION',
        id: nextPotionId++,
        alchemistId: alchemistId
    }
}

export const removePotion = (id) => {
    return {
        type: 'REMOVE_POTION',
        id: id
    }
}
