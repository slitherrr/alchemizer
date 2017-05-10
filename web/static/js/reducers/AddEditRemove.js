const addEditRemove = (defaultItem) => {
    return {
        addItem: (items, id, update) => {
            return [...items.slice(0, -1),
                Object.assign({}, defaultItem, {id: id}, update),
                defaultItem
            ]
        },
        editItem: (items, id, update) => {
            return items.map(i => (
                i.id === id ? Object.assign({}, i, update) : i
            ))
        },
        removeItem: (items, id) => {
            console.log('removeitem')
            console.log(id)
            return id === undefined ? [...items.slice(0, -1), defaultItem] : items.filter(i => (i.id !== id))
        }
    }
}

export default addEditRemove
