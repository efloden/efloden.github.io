import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import { withStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import HomeIcon from '@material-ui/icons/Home'
import InfoIcon from '@material-ui/icons/Info'
import FolderSpecialIcon from '@material-ui/icons/FolderSpecial'

const pageNumber = {
  '/': 0,
  '/about': 1,
  '/portfolio': 2
}

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

  render() {
    const { classes, location } = this.props
    const value = pageNumber[location.pathname]
    return (
      <Route render={({ history }) => (
        <BottomNavigation
          value={value}
          onChange={this.handleChange}
          showLabels
          className={classes.root}
        >
          <BottomNavigationAction
            onClick={()=> history.push('/')}
            label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction
            onClick={()=> history.push('/about')}
            label="About" icon={<InfoIcon />} />
          <BottomNavigationAction
            onClick={()=> history.push('/portfolio')}
            label="Portfolio"
            icon={<FolderSpecialIcon />} />
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