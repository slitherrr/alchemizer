import React from 'react'
import Search from 'react-search'

const Potion = ({alchemistId, removePotion, id, potionType, cl}) => {
    let potionInfo
    let allPotionsMock = [
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
    if (name) {
        potionInfo = <span>placeholder cv {name}</span>
    } else {
        potionInfo = <span>placeholder no cv</span>
    }

    return (
        <div>
            <Search items={allPotionsMock}
                    placeholder={"Pick a potion"}
            />
            <button onClick={e => {
                e.stopPropagation()
                removePotion(id)
            }}>x</button>
            {potionInfo}
        </div>
    )
}

export default Potion
