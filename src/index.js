import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import reportWebVitals from './reportWebVitals';
import rootReducer from './reducers/rootReducer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

const store = createStore(rootReducer)

ReactDOM.render(<Provider store={store}><Routes /></Provider>, document.getElementById('root'));
reportWebVitals();
