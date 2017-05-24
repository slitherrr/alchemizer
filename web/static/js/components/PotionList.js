import React from 'react'
import Potion from './Potion'

const PotionList = ({potions, alchemistId, addPotion, removePotion}) => {
    return(
        <div>
            {potions.map(potion =>
                (
                    <Potion
                        key={potion.id === undefined ? "" : potion.id}
                        removePotion={removePotion}
                        alchemistId={alchemistId}
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
