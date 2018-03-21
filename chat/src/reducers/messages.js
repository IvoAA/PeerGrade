const messages = (state = [], action) => {

    switch (action.type) {
        case 'GET_ALL_MESSAGES_RECEIVED':
            return action.data.data
            
        case 'SEND_MESSAGE_SUCESS':

            let data = action.data.data;
            
            let message = {
                "_id": { "$oid": data.$oid },
                "user": data.message.user,
                "text": data.message.text,
                "date": data.message.date
            }
        
            return [
                ...state,
                message
            ]
        default:
            return state
    }
}

export default messages
