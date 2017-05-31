let nextPotionId = 0
let nextAlchemistId = 0

export const addAlchemist = () => {
    return {
        type: 'ADD_ALCHEMIST',
        id: "alchemist" + nextAlchemistId++
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
        id: "potion" + nextPotionId++,
        alchemistId: alchemistId
    }
}

export const removePotion = (alchemistId, id) => {
    return {
        type: 'REMOVE_POTION',
        id: id,
        alchemistId: alchemistId
    }
}

export const editPotion = (id, spellId) => {
    return {
        type: 'EDIT_POTION',
        id: id,
        spellId: spellId
    }
}
