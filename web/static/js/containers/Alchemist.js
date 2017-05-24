import {connect} from 'react-redux'
import Alchemist from '../components/Alchemist'
import {addAlchemist, startEditAlchemist, finishEditAlchemist, removeAlchemist} from '../actions'

const mapDispatchToProps = (dispatch) => {
    return {
        addAlchemist: () => {
            dispatch(addAlchemist())
        },
        startEditAlchemist: (id) => {
            dispatch(startEditAlchemist(id))
        },
        finishEditAlchemist: (id, name, craftAlchemy) => {
            dispatch(finishEditAlchemist(id, name, (craftAlchemy === "" ? 0 : parseInt(craftAlchemy, 10))))
        },
        removeAlchemist: (id) => {
            dispatch(removeAlchemist(id))
        }
    }
}

const AlchemistContainer = connect(undefined, mapDispatchToProps)(Alchemist)

export default AlchemistContainer
