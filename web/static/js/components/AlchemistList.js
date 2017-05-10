import React from 'react'
import Alchemist from './Alchemist'


const AlchemistList = ({alchemists, addOrEditAlchemist, finishAddOrEditAlchemist, removeAlchemist}) => {
    return (
        <div className="container">
            {alchemists.map(alchemist =>
                <Alchemist
                    key={alchemist.id === undefined ? "" : alchemist.id}
                    removeAlchemist={removeAlchemist}
                    addOrEditAlchemist={addOrEditAlchemist}
                    finishAddOrEditAlchemist={finishAddOrEditAlchemist}
                    {...alchemist}
                />
            )}
        </div>
   )
}

export default AlchemistList
