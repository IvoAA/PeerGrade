import React from 'react'
import Message from './Message'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const MessageList = ({ messages }) => 
    <div id="message_list">
        <ReactCSSTransitionGroup
            transitionName="message"
            transitionEnterTimeout={1500}
            transitionLeaveTimeout={0}
        >
            {messages.map(message => 


                    <Message key={message._id.$oid}
                        {...message}
                    />
                
            )}
        </ReactCSSTransitionGroup>
    </div>


export default MessageList
