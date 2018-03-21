import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers'
import './styles.css'
import dataService from './services/dataService'

let store = createStore(rootReducer, {}, applyMiddleware(dataService))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);


store.dispatch({ type: 'GET_ALL_MESSAGES' })

registerServiceWorker();
