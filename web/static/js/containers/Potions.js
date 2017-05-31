import {connect} from 'react-redux'
import PotionList from '../components/PotionList'
import {addPotion, editPotion, removePotion} from '../actions'

const mapStateToProps = (state, ownProps) => {
    return {
        potions: ownProps.potions.map(pId => state.potions.byId[pId])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPotion: (alchemistId) => {
            dispatch(addPotion(alchemistId))
        },
        editPotion: (id, spellId) => {
            dispatch(editPotion(id, spellId))
        },
        removePotion: (alchemistId, id) => {
            dispatch(removePotion(alchemistId, id))
        },
    }
}

const Potions = connect(mapStateToProps, mapDispatchToProps)(PotionList)

export default Potions
