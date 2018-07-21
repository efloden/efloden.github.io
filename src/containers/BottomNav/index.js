import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import { withStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
// import HomeIcon from '@material-ui/icons/'
// import InfoIcon from '@material-ui/icons/Info'
// import FolderSpecialIcon from '@material-ui/icons/FolderSpecial'

// const pageNumber = {
//   '/': 0,
//   '/about': 1,
//   '/portfolio': 2
// }

const styles = {
  root: {
    width: 'auto',
  },
}

class SimpleBottomNavigation extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  handleChange = () => {
    // this.setState({ value })
  }
  
  openGithub = () => {
    window.open('https://github.com/efloden')
  }

  openLinkedIn = () => {
    window.open('https://linkedin.com/in/earlmarkfloden/')
  }

  openTwitter = () => {
    window.open('https://twitter.com/exmark11/')
  }

  render() {
    // Override selected style
    const { classes } = this.props // location
    // const value = pageNumber[location.pathname]
    return (
      <Route render={({ history }) => (
        <BottomNavigation
          value={null}
          onChange={this.handleChange}
          showLabels
          className={classes.root}
        >
          {/* <BottomNavigationAction
            onClick={()=> history.push('/')}
            label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction
            onClick={()=> history.push('/about')}
            label="About" icon={<InfoIcon />} /> */}
          {/* <BottomNavigationAction
            onClick={()=> history.push('/portfolio')}
            label="Portfolio"
            icon={<FolderSpecialIcon />} /> */}
          <BottomNavigationAction
            onClick={this.openLinkedIn}
            className={classes.root}
            label="LinkedIn"
            icon={<span className='fa fa-linkedin fa-2x'></span>} />
          <BottomNavigationAction
            onClick={this.openGithub}
            label="Github"
            icon={<span className='fa fa-github fa-2x'></span>} />
          <BottomNavigationAction
            onClick={this.openTwitter}
            label="Twitter"
            icon={<span className='fa fa-twitter fa-2x'></span>} />
          {history.location.key}
        </BottomNavigation>
      )} />
    )
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(withRouter(SimpleBottomNavigation))