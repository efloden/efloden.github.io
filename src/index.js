import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'
import ConnectedIntlProvider from './ConnectedIntlProvider'
import rootReducer from './reducers/index'
import reduxLogger from 'redux-logger'
// import { CHANGE_LOCALE } from './actions/action-types'
import 'font-awesome/css/font-awesome.css'

// Redux Beacon --->
import { createMiddleware } from 'redux-beacon'
import logger from '@redux-beacon/logger'
import GoogleAnalytics, { trackEvent } from '@redux-beacon/google-analytics'
// <--- Redux Beacon

// Redux Beacon --->

const eventsMap = {
  'CHANGE_LOCALE': trackEvent(action => ({
    category: 'Locale',
    action: 'change',
    label: action.payload.locale.displayName
  }))
}



const gaMiddleware = createMiddleware(eventsMap, GoogleAnalytics(), {
  logger,
})
// <--- Redux Beacon

const store = createStore(
  rootReducer,
  applyMiddleware(gaMiddleware, reduxLogger)
)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedIntlProvider>
      <App />
    </ConnectedIntlProvider>
  </Provider>
  , document.getElementById('root'))
registerServiceWorker()
