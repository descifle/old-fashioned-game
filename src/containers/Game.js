import { connect } from 'react-redux'
import App from '../components/App'

const mapStateToProps = state => ({
    message: state.message
})

const Game = connect(mapStateToProps)(App)

export default Game