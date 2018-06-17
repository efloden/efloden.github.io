import React, { Component } from 'react'
import Navbar from './Navbar'
import Grid from '@material-ui/core/Grid'

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Navbar />
        </header>
        <Grid container spacing={24}>
        </Grid>
      </div>
    )
  }
}

export default App
