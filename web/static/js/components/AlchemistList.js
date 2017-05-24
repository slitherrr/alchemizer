import React from 'react'
import Alchemist from '../containers/Alchemist'


const AlchemistList = ({alchemists, alchemistIds}) => {
    return (
        <div>
            {alchemistIds.map(alchemistId =>
                <Alchemist
                    key={alchemistId}
                    id={alchemistId}
                    {...alchemists[alchemistId]}
                />
            )}
            <Alchemist
                id={undefined}
                />
        </div>
   )
}

export default AlchemistList
