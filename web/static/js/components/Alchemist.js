import React, { PropTypes } from 'react'

const Alchemist = ({addOrEditAlchemist, finishAddOrEditAlchemist, removeAlchemist, editing, name, id, craftAlchemy}) => {
    let nameInput, craftInput
    let alchemistInfo

    if(editing) {
        alchemistInfo = <form onSubmit={e => {
                e.preventDefault()
                finishAddOrEditAlchemist(id, nameInput.value.trim(), craftInput.value.trim())
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
                <button type="submit">Finish </button>
        </form>
    } else {
        alchemistInfo = <span>
            {name && <button className="btn-remove" onClick={(e) => removeAlchemist(id)}>x</button>}
            <p className="ipt-replace-top"> {name ? name : "new alchemist"} </p>
            <p className="ipt-replace"> {name ? "Craft (alchemy): " + craftAlchemy : ""}</p>
        </span>
    }

    return (
        <div className={"col-lg-3 col-md-4 col-xs-6"}>
            <div
                className={"alchemist" + (name ? " existing" : "")}
                onClick={editing ? "" : e => addOrEditAlchemist(id)}>
                {alchemistInfo}
            </div>
        </div>
    )
}

export default Alchemist
