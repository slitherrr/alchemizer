import React from 'react'
import Search from 'react-search'

const Potion = ({alchemistId, editPotion, removePotion, id, spellId, cl}) => {
    let potionInfo
    let allSpellsMock = [
        {
            id: 0,
            value: 'Spider Climb',
            classes: {
                'alchemist': 2,
                'wizard': 2,
                'sorcerer': 2
            }
        }
    ]
    console.log("spellId " + spellId)
    if (spellId !== undefined) {
        potionInfo = <span>{allSpellsMock[spellId].value}</span>
    } else {
        potionInfo = <span>(new potion)</span>
    }

    return (
        <div>
            <Search items={allSpellsMock}
                    placeholder={"Pick a potion"}
                    onItemsChanged={items => {
                        if(items.length == 0) {
                            editPotion(id, undefined)
                        } else {
                            editPotion(id, items[0].id)
                        }
                    }}
            />
            <button className="btn-remove" onClick={e => {
                removePotion(alchemistId, id)
            }}>x</button>
            {potionInfo}
        </div>
    )
}

export default Potion
