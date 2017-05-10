import React from 'react'
import Alchemist from '../containers/Alchemist'


const AlchemistList = ({alchemists, addOrEditAlchemist, finishAddOrEditAlchemist, removeAlchemist}) => {
    return (
        <div>
            {alchemists.map(alchemist =>
                <Alchemist
                    key={alchemist.id === undefined ? "" : alchemist.id}
                    {...alchemist}
                />
            )}
        </div>
   )
}

export default AlchemistList
