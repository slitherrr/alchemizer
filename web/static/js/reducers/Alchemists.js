import AddEditRemove from './AddEditRemove'

const newAlchemist = {
    id: undefined,
    name: undefined,
    craftAlchemy: 0,
    editing: false
}

const initialState = [newAlchemist]

let removeItem, editItem, addItem


({addItem, editItem, removeItem} = AddEditRemove(newAlchemist))

const alchemists = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_OR_EDIT_ALCHEMIST':
            return editItem(state, action.id, {editing: true})

        case 'FINISH_ADD_OR_EDIT_ALCHEMIST':
            const keep = !!action.name
            const isUpdate = state.map(a => a.id).includes(action.id)

            if(!keep && isUpdate) {
                return removeItem(state, action.id)
            } else if (!keep && !isUpdate) {
                return editItem(state, undefined, {editing: false})
            }

            if(isUpdate) {
                return editItem(state, action.id, {name: action.name, craftAlchemy: action.craftAlchemy, editing: false})
            } else {
                return addItem(state, action.id, {name: action.name, craftAlchemy: action.craftAlchemy})
            }
        case 'REMOVE_ALCHEMIST':
            return removeItem(state, action.id)
        default:
            return state
    }
}

export default alchemists
