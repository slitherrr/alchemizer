import {connect} from 'react-redux'
import {editPotion} from '../actions'
import PotionInfo from '../components/PotionInfo'

const mapDispatchToProps = (dispatch) => {
    return {
        changeCasterClass: (potionId, casterClass) => {
            dispatch(editPotion(potionId, 'casterClass', casterClass))
        },
        changeCasterLevel: (potionId, casterLevel) => {
            dispatch(editPotion(potionId, 'cl', casterLevel))
        }
    }
}


const PotionInfoContainer = connect(undefined, mapDispatchToProps)(PotionInfo)

export default PotionInfoContainer
