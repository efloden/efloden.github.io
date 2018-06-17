import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
})

function About(props) {
  const { classes } = props
  return (
    <Grid item xs={12}>
      <Paper className={classes.paper}>About</Paper>
    </Grid>
  )
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(About)
