import { connect } from 'react-redux'
import Counter from './Counter'
const mapStateToProps = (state) => {
    return {
        counter: state.counter,
        color: state.colorToggle
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: (e) => { dispatch({type: 'INCREMENT'}); e.stopPropagation() },
        onDecrement: (e) => { dispatch({type: 'DECREMENT'}); e.stopPropagation() },
        onColorToggle: () => { dispatch({type: 'COLORTOGGLE'})}
    }
}
const App = connect(mapStateToProps, mapDispatchToProps)(Counter)
export default App
