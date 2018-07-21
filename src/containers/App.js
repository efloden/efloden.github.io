import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { MuiThemeProvider } from '@material-ui/core/styles'
import Themes from './Themes'
import About from './About'
import BottomNav from './BottomNav'
import Home from './Home'
// import Portfolio from './Portfolio'
import Navbar from './Navbar'
import { setAppTheme }  from '../actions/theme-actions'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import './index.css'

class App extends Component {
  static propTypes = {
    setTheme: PropTypes.func.isRequired,
    muiTheme: PropTypes.any
  }
  changeTheme = (theme) => {
    this.props.setTheme(theme)
  }
  render() {
    const { muiTheme } = this.props
    return (
      <Router>
        <MuiThemeProvider theme={muiTheme ? muiTheme : Themes.light}>
          <article style={{backgroundColor: muiTheme.palette.background.default}}>
            <header>
              <Navbar changeTheme={this.changeTheme} currentTheme={muiTheme} />
            </header>
            <main>
              <Route component={Home}/>
              <About />
              {/* <Route path='/about' component={About}/>
              <Route path='/portfolio' component={Portfolio}/> */}
            </main>
            <footer>
              <BottomNav />
            </footer>
          </article>
        </MuiThemeProvider>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    muiTheme: state.theme.muiTheme
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setTheme: (theme) => {
      dispatch(setAppTheme(theme))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
