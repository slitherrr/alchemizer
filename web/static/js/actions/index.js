let nextPotionId = 0

export const addOrEditAlchemist = (id) => {
    return {
        type: 'ADD_OR_EDIT_ALCHEMIST',
        id: id
    }
}

export const finishAddOrEditAlchemist = (id, name, craftAlchemy) => {
    return {
        type: 'FINISH_ADD_OR_EDIT_ALCHEMIST',
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
