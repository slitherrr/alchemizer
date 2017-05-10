import {connect} from 'react-redux'
import PotionList from '../components/PotionList'
import {addPotion, removePotion} from '../actions'

const mapStateToProps = (state, ownProps) => {
    return {
        potions: state.potions.filter(p => ownProps.potions.includes(p.id))
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPotion: (alchemistId) => {
            dispatch(addPotion(alchemistId))
        },
        removePotion: (id) => {
            dispatch(removePotion(id))
        }
    }
}

const Potions = connect(mapStateToProps, mapDispatchToProps)(PotionList)

export default Potions
