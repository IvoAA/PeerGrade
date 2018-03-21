import React from 'react'
import { connect } from 'react-redux'

const AddMessage = ({ dispatch }) => {
    let input

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) return

                let message = {
                    "user": "MyUsername",
                    "date": new Date().toISOString(),
                    "text": input.value
                }

                dispatch({ type: 'SEND_MESSAGE', "data": message})

                input.value = ''
            }}>
                <div id="footer">
                    <textarea id="input_box" className="col-sm" placeholder="Type your message here" rows="4" ref={node => input = node} />
                    <button className="btn btn-primary float-right" type="submit">Send</button>
                </div>
            </form>
        </div>
    )
}

export default connect()(AddMessage)
