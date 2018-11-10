import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import avatar from '../../assets/avatar-nakag.png'

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
      <Paper className={classes.paper}>
        <figure>
          <img className={'avatar'} src={avatar} alt='avatar'/>
        </figure>
        <p>
          <FormattedMessage
            id='app.about.intro'
            defaultMessage="Hi."
          />
        </p>
        <p>
          <FormattedMessage
            id='app.about.location'
            defaultMessage="I'm a full stack developer based in Tokyo, Japan."
          />
        </p>
        <p>
          <FormattedMessage
            id='app.about.interest'
            defaultMessage="I have a passion for web design and love to create for web and mobile devices."
          />
        </p>
      </Paper>
    </Grid>
  )
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(About)
