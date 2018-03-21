import request from 'superagent'

const dataService = store => next => action => {
  /*
  Pass all actions through by default
  */
  next(action)
  switch (action.type) {
  case 'GET_ALL_MESSAGES':
    /*
    In case we receive an action to send an API request, send the appropriate request
    */
    request
      .get('http://localhost:8888/api/all/')
      .end((err, res) => {
        if (err) {
          /*
          in case there is any error, dispatch an action containing the error
          */
          return next({
            type: 'GET_ALL_MESSAGES_ERROR',
            err
          })
        }
        const data = JSON.parse(res.text)
        /*
        Once data is received, dispatch an action telling the application
        that data was received successfully, along with the parsed data
        */
        next({
          type: 'GET_ALL_MESSAGES_RECEIVED',
          data
        })
      })
    break

    case 'SEND_MESSAGE':
    
      /*
      In case we receive an action to send an API request, send the appropriate request
      */
      request
        .post('http://localhost:8888/api/send/')
        .send(action.data)
        .end((err, res) => {
          if (err) {
            /*
            in case there is any error, dispatch an action containing the error
            */
            return next({
              type: 'SEND_MESSAGE_ERROR',
              err
            })
          }
          
          const data = JSON.parse(res.text)
          data.data.message = action.data
          /*
          Once data is received, dispatch an action telling the application
          that data was received successfully, along with the parsed data
          */
          next({
            type: 'SEND_MESSAGE_SUCESS',
            data
          })
        })
      break
  /*
  Do nothing if the action does not interest us
  */
  default:
    break
  }

};

export default dataService