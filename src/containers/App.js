import React, { Component } from 'react'
import About from './About'
import BottomNav from './BottomNav'
import Home from './Home'
// import Portfolio from './Portfolio'
import Navbar from './Navbar'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import './index.css'

class App extends Component {
  render() {
    return (
      <Router>
        <article>
          <header>
            <Navbar />
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
      </Router>
    )
  }
}

export default App
