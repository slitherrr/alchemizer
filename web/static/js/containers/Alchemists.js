import {connect} from 'react-redux'
import AlchemistList from '../components/AlchemistList'

const mapStateToProps = (state) => {
    return {
        alchemists: state.alchemists.byId,
        alchemistIds: state.alchemists.allIds
    }
}

const AlchemistsContainer = connect(mapStateToProps)(AlchemistList)

export default AlchemistsContainer
