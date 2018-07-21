import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import Themes from '../../containers/Themes'
import AppBar from '@material-ui/core/AppBar'
// import Button from '@material-ui/core/Button'
// import BrushIcon from '@material-ui/icons/Brush'
import Switch from '@material-ui/core/Switch'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
// import IconButton from '@material-ui/core/IconButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun, faCloud } from '@fortawesome/free-solid-svg-icons'
import LanguageSelect from '../../components/LanguageSelect'

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
}

function Navbar(props) {
  const { classes, changeTheme, currentTheme } = props
  const change = () => {
    const changeTo = currentTheme
      ? currentTheme.palette.type === 'dark'
        ? Themes.light : Themes.dark
      : Themes.dark
    changeTheme(changeTo)
  }
  const switchValue = currentTheme
    ? currentTheme.palette.type === 'dark'
      ? true : false
    : false
  return (
    <Route render={({ history }) => (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            {/* <Button className={classes.menuButton} aria-label="Menu" onClick={change}>
              <BrushIcon /> {currentTheme && currentTheme.palette.type}
            </Button> */}
            <FontAwesomeIcon icon={faSun} className='slow-spin' transform="grow-3"/>
            <Switch
              checked={switchValue}
              onChange={change}
              color="default"
              value="themeSwitch"
            />
            <span className="fa-layers fa-fw">
              <FontAwesomeIcon icon={faCloud} color={currentTheme.cloud} className='cloud-move' transform="shrink-2 right-4 up-6"/>
              <FontAwesomeIcon icon={faMoon} transform="grow-2" />
            </span>
            <Typography variant="title" className={classes.flex}>
              
            </Typography>
            <LanguageSelect />
            {/* <Button onClick={()=> history.push('/about')}>About</Button> */}
            {/* <Button onClick={()=> history.push('/portfolio')}>Portfolio</Button> */}
          </Toolbar>
        </AppBar>
      </div>
    )} />
  )
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
  changeTheme: PropTypes.func.isRequired,
  currentTheme: PropTypes.any
}

export default withStyles(styles)(Navbar)
