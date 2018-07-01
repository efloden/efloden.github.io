import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import './index.css'

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  intro: {
    fontFamily: 'Reem Kufi, roboto',
    paddingTop: '3rem'
  },
  subtitle: {
    paddingBottom: '3rem'
  }
})

function Home(props) {
  const { classes } = props
  return (
    <Grid item xs={12}>
      <Paper>
        <Typography className={classes.intro} variant="display4">
          <FormattedMessage
            id='app.header.greeting'
            defaultMessage="Hello, I'm Earl!"
          />
        </Typography>
        <Typography className={classes.subtitle} variant="display1" component="p">
          <FormattedMessage
            id='app.header.subtitle'
            defaultMessage="Full Stack Dev | Open Source Enthusiast | Computer Whisperer"
          />
        </Typography>
        <div>
          <ul id='menu'>
            <a className='menu-button icon-plus' href='#menu' title='Show navigation'></a>
            <a className='menu-button icon-minus' href='#0' title='Hide navigation'></a>
            <li className='menu-item'>
              <a href='https://github.com/efloden'>
                <span className='fa fa-github'></span>
              </a>
            </li>
            <li className='menu-item'>
              <a href='https://linkedin.com/in/earlmarkfloden/'>
                <span className='fa fa-linkedin'></span>
              </a>
            </li>
            <li className='menu-item'>
              <a href='https://twitter.com/exmark11'>
                <span className='fa fa-twitter'></span>
              </a>
            </li>
            <li className='menu-item'>
              <a href='#menu'>
                <span className='fa fa-instagram'></span>
              </a>
            </li>
          </ul>
        </div>
      </Paper>
    </Grid>
  )
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Home)
