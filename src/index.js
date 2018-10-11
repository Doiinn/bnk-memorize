import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import rootReducer from './reducers'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'

const history = createBrowserHistory()

export const store = createStore(
  connectRouter(history)(rootReducer),
  compose(
    applyMiddleware(routerMiddleware(history)
    )
  )
)

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App history={history} />
    </Provider>,
    document.getElementById('root')
  )
}

render()
registerServiceWorker()
