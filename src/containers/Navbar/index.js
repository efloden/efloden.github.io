import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import BrushIcon from '@material-ui/icons/Brush'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
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
  const { classes } = props
  return (
    <Route render={({ history }) => (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <IconButton className={classes.menuButton} aria-label="Menu">
              <BrushIcon />
            </IconButton>
            <Typography variant="title" className={classes.flex}>
              
            </Typography>
            <LanguageSelect />
            <Button onClick={()=> history.push('/about')}>About</Button>
            <Button onClick={()=> history.push('/portfolio')}>Portfolio</Button>
          </Toolbar>
        </AppBar>
      </div>
    )} />
  )
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Navbar)
