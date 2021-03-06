import React from 'react'
import Potion from './Potion'

const PotionList = ({alchemistId, potions, addPotion, changeSpellId, removePotion}) => {
    return(
        <div>
            {potions.map(potion =>
                (
                    <Potion
                        key={potion.id}
                        alchemistId={alchemistId}
                        changeSpellId={changeSpellId}
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
