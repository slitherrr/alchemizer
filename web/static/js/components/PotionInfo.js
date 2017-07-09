import React from 'react'
import Search from 'react-search'

let fastProgression = (spellLevel) => {
    return (spellLevel * 2) - 1
}

let gishProgression = (spellLevel) => {
    return (spellLevel - 1) * 3 + 1
}

let classToProgression = {
    "alchemist": {
        "minCl": gishProgression,
    },
    "bard": {
        "minCl": gishProgression,
    },
    "cleric": {
        "minCl": fastProgression,
    },
    "sorcerer": {
        "minCl": (spellLevel) => {
            return (spellLevel == 1 ? 1 : fastProgression(spellLevel) + 1)
        },
    },
    "summoner": {
        "minCl": gishProgression,
    },
    "wizard": {
        "minCl": fastProgression,
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

const PotionInfo = ({spell, potionId, changeCasterClass, changeCasterLevel, cl, casterClass}) => {
    let clInput, spellLevel, minCl, cost, time, units

    if(casterClass !== undefined) {
        spellLevel = spell.classes.filter(s => s[0] === casterClass)[0][1]
        minCl = classToProgression[casterClass].minCl(spellLevel)
        if(cl === undefined) { cl = minCl}
        cost = cl * spellLevel * 50
        time = (cost <= 250 ? 2 : Math.ceil(cost / 1000) * 24)
        units = "h"
        if (time / 24 >= 1) {
            units = "d"
            time = (time / 24).toPrecision(3)
        }
    }


    return (<div>
        <Search
            items={classesToSearchItems(spell.classes)}
            placeholder={"cast by a..."}
            onItemsChanged={items => propagateSearchToStateByValue(changeCasterClass, potionId, items)}
        />
        {casterClass !== undefined &&
            <input
                type="number"
                className="ipt-alchemist"
                ref={node => {clInput = node}}
                min={minCl}
                max={20}
                defaultValue={cl}
                onChange={evt => changeCasterLevel(potionId, evt.target.value)}
            />
        }
        {cost !== undefined &&
            `Cost: ${cost}
            Time: ${time} ${units}`
        }
    </div>)
}

export default PotionInfo
