import { connect } from 'react-redux'
import MessageList from '../components/MessageList'

const getVisibleMessages = (messages) => {
    return messages
}

const mapStateToProps = state => ({
    
    messages: getVisibleMessages(state.messages)
})

export default connect(
    mapStateToProps,
)(MessageList)
