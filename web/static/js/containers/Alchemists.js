import { connect } from 'react-redux'
import AlchemistList from '../components/AlchemistList'
import {addOrEditAlchemist, finishAddOrEditAlchemist, removeAlchemist} from '../actions'

const mapStateToProps = (state) => {
    return {
        alchemists: state.alchemists
    }
}

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

const Alchemists = connect(mapStateToProps, mapDispatchToProps)(AlchemistList)

export default Alchemists
