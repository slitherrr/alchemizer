import {connect} from 'react-redux'
import Alchemist from '../components/Alchemist'
import {addOrEditAlchemist, finishAddOrEditAlchemist, removeAlchemist} from '../actions'

const mapDispatchToProps = (dispatch) => {
    return {
        addOrEditAlchemist: (id) => {
            dispatch(addOrEditAlchemist(id))
        },
        finishAddOrEditAlchemist: (id, name, craftAlchemy) => {
            dispatch(finishAddOrEditAlchemist(id, name, (craftAlchemy === "" ? 0 : parseInt(craftAlchemy, 10))))
        },
        removeAlchemist: (id) => {
            dispatch(removeAlchemist(id))
        }
    }
}

const AlchemistContainer = connect(undefined, mapDispatchToProps)(Alchemist)

export default AlchemistContainer
