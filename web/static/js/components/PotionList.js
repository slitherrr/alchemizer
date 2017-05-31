import React from 'react'
import Potion from './Potion'

const PotionList = ({potions, alchemistId, addPotion, editPotion, removePotion}) => {
    return(
        <div>
            {potions.map(potion =>
                (
                    <Potion
                        key={potion.id}
                        alchemistId={alchemistId}
                        editPotion={editPotion}
                        removePotion={removePotion}
                        {...potion}
                    />
                )
            )}
            <button onClick={e => {
                e.stopPropagation()
                addPotion(alchemistId)
            }}>add</button>
        </div>
    )
}

export default PotionList
