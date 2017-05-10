let nextAlchemistId = 0

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
        id: (id === undefined ? nextAlchemistId++ : id)
    }
}

export const removeAlchemist = (id) => {
    return {
        type: 'REMOVE_ALCHEMIST',
        id: id
    }
}
