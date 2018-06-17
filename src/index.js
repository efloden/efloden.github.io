import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'
import 'font-awesome/css/font-awesome.css'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
