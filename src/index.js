import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
// import rootReducer from './reducers'
import configStore from './configStore';

// const store = createStore(rootReducer)
const store = configStore()

const MyApp = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(<MyApp />, document.getElementById('root'))
