import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'
import ConnectedIntlProvider from './ConnectedIntlProvider'
import rootReducer from './reducers/index'
import 'font-awesome/css/font-awesome.css'

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedIntlProvider>
      <App />
    </ConnectedIntlProvider>
  </Provider>
  , document.getElementById('root'))
registerServiceWorker()
