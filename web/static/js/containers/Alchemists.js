import {connect} from 'react-redux'
import AlchemistList from '../components/AlchemistList'

const mapStateToProps = (state) => {
    return {
        alchemists: state.alchemists
    }
}

const AlchemistsContainer = connect(mapStateToProps)(AlchemistList)

export default AlchemistsContainer
