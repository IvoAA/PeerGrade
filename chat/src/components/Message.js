import React from 'react'

const Header = (props) => (
    <div>
        <div id="user">{props.user} wrote&nbsp;</div>
        <div id="date">{props.date}</div>
    </div>
)

const Message = ({ user, date, text }) => {
    
    date = date_string(new Date(date))
    let className = "col-10 " 

    if( user === "MyUsername" ){
        className += "float-right"
        user = "You"

    } else {
        className += "float-left" 
    }

    return (
    <div id="message_box" className={className}>
        <Header user={user} date={date}/>
            <div style={{"marginLeft": "5px"}}>{text}</div>
    </div>
)}

export default Message

function date_string(date) {

    let day = get_day(date)

    let minutes = date.getMinutes() >= 10 ? date.getMinutes() : "0" + date.getMinutes()

    return day + " " + date.getHours() + "." + minutes
}

function get_day(date) {

    if (date.toDateString() === new Date().toDateString())
        return "Today"

    let day = date.getDate()
    switch (day) {
        case 1:
            day += "st"
            break;
        case 2:
            day += "nd"
            break;
        case 3:
            day += "rd"
            break;

        default:
            day += "th"
            break;
    }

    let monthNames = [
        "January", "February", "March",
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December"
    ];

    let month = monthNames[date.getMonth()]

    return day + " " + month
}