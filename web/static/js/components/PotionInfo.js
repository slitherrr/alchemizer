import React from 'react'
import Search from 'react-search'

let fast_progression = (spell_level) => {
    return (spell_level * 2) - 1
}

let gish_progression = (spell_level) => {
    return (spell_level - 1) * 3 + 1
}

let class_to_progression = {
    "alchemist": {
        "min_cl": gish_progression,
    },
    "bard": {
        "min_cl": gish_progression,
    },
    "cleric": {
        "min_cl": fast_progression,
    },
    "sorcerer": {
        "min_cl": (spell_level) => {
            return (spell_level == 1 ? 1 : fast_progression(spell_level) + 1)
        },
    },
    "summoner": {
        "min_cl": gish_progression,
    },
    "wizard": {
        "min_cl": fast_progression,
    },
}


const propagateSearchToStateByValue = (dispatch, id, items) => {
    if(items.length == 0) {
        dispatch(id, undefined)
    } else {
        dispatch(id, items[0].value)
    }
}

const classesToSearchItems = (classes) => {
    let counter = 0
    return classes.map(c => {
        return {
            id: counter++,
            value: c[0]
        }
    })
}

const PotionInfo = ({spell, potionId, changeCasterClass, cl, casterClass}) => {
    return (<div>
        <Search
            items={classesToSearchItems(spell.classes)}
            placeholder={"cast by a..."}
            onItemsChanged={items => propagateSearchToStateByValue(changeCasterClass, potionId, items)}
        />
    </div>)
}

export default PotionInfo
