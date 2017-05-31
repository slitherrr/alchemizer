import React from 'react'
import Potions from '../containers/Potions'

//TODO: refactor individual traits to editable components
const Alchemist = ({addAlchemist, startEditAlchemist, finishEditAlchemist, removeAlchemist, editing, name, id, craftAlchemy, potions}) => {
    let nameInput, craftInput
    let alchemistInfo
    if(editing) {
        alchemistInfo = <span>
            <form onSubmit={e => {
                    e.preventDefault()
                    finishEditAlchemist(id, nameInput.value.trim(), craftInput.value.trim())
                }}>
                    <input type="text" className="ipt-alchemist" autoFocus ref={node => {nameInput = node}} defaultValue={name ? name : ""} />
                    Craft (alchemy)
                    <input
                        type="number"
                        className="ipt-alchemist"
                        ref={node => {craftInput = node}}
                        min={0}
                        max={500}
                        defaultValue={craftAlchemy ? craftAlchemy : 0}
                    />
                    <button type="submit">Finish</button>
            </form>
        </span>
    } else if (id === undefined) {
        alchemistInfo = <span>new alchemist</span>
    } else {
        alchemistInfo = <span>
            <button className="btn-remove" onClick={e => removeAlchemist(id)}>x</button>
            <p className="ipt-replace-top" onClick={e => startEditAlchemist(id)}>
                {name}
            </p>
            <p className="ipt-replace" onClick={e => startEditAlchemist(id)}>
                {"Craft (alchemy): " + craftAlchemy}
            </p>
            {<Potions alchemistId={id} potions={potions} />}
        </span>
    }

    return (
        <div className={"col-lg-3 col-md-4 col-xs-6"}>
            <div
                className={"alchemist" + (name ? " existing" : "")}
                onClick={id === undefined ? e => addAlchemist() : ""}>
                {alchemistInfo}
            </div>
        </div>
    )
}

export default Alchemist
