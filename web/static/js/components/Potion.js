import React from 'react'
import Search from 'react-search'
import PotionInfo from '../containers/PotionInfo'

const propagateSearchToStateById = (dispatch, id, items) => {
    if(items.length == 0) {
        dispatch(id, undefined)
    } else {
        dispatch(id, items[0].id)
    }
}

const Potion = ({alchemistId, changeSpellId, removePotion, id, spellId, cl, casterClass}) => {
    let potionInfo
    let allSpellsMock = [
        {
            id: 0,
            value: 'Spider Climb',
            link: "http://www.d20pfsrd.com/magic/all-spells/s/spider-climb/",
            classes: [
                ['alchemist', 2],
                ['wizard', 2],
                ['sorcerer', 2],
            ]
        }
    ]

    return (
        <div>
            <Search
                items={allSpellsMock}
                placeholder={"choose a spell"}
                onItemsChanged={items => propagateSearchToStateById(changeSpellId, id, items)}
            />
            <button className="btn-remove" onClick={e => {
                removePotion(alchemistId, id)
            }}>x</button>
            {spellId !== undefined &&
                <PotionInfo
                    spell={allSpellsMock[spellId]}
                    potionId={id}
                    cl={cl}
                    casterClass={casterClass}
                />
            }
        </div>
    )
}

export default Potion
