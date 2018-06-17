import React, { Component } from 'react'
import About from './About'
import Home from './Home'
import Portfolio from './Portfolio'
import Navbar from './Navbar'
import Grid from '@material-ui/core/Grid'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <header>
            <Navbar />
          </header>
          <Grid container spacing={24}>
            <Route component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/portfolio' component={Portfolio}/>
          </Grid>
        </React.Fragment>
      </Router>
    )
  }
}

export default App
