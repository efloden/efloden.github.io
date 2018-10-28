import React, {Component} from 'react'
import PropTypes from 'prop-types'
import baffle from 'baffle'
import { FormattedMessage, injectIntl, defineMessages, intlShape } from 'react-intl'
import { withStyles } from '@material-ui/core/styles'
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

const messages = defineMessages({
  one: {
    id: 'app.header.sub1',
    defaultMessage: 'Night Owl',
  },
  two: {
    id: 'app.header.sub2',
    defaultMessage: 'Digital Designer',
  },
  three: {
    id: 'app.header.sub3',
    defaultMessage: 'Computer Whisperer',
  },
  four: {
    id: 'app.header.sub4',
    defaultMessage: 'ECMAScripter',
  },
})

class Home extends Component {
  static propTypes = {
    intl: intlShape
  }
  digest = [
    this.props.intl.formatMessage(messages.one),
    this.props.intl.formatMessage(messages.two),
    this.props.intl.formatMessage(messages.three),
    this.props.intl.formatMessage(messages.four), 
  ]
  state = {
    update: true,
    obfuscate: true,
    current: 0
  }
  componentDidMount() {
    let b = baffle('.baffle', {
      characters: '/*<█▒░ ',
      speed: 150
    })
    b.start()
    const setText = () => {
      new Promise((resolve) => {
        return resolve(this.setState((prevState) => ({
          current: prevState.current === this.digest.length - 1 ? 0 : prevState.current + 1
        })))
      }).then(
        // console.log('movingnext', this.state)
        b.text(_ => this.digest[this.state.current])
      )
    }
    const setObfuscate = () => {
      new Promise((resolve) => {
        return resolve(this.setState((prevState) => ({
          obfuscate: !prevState.obfuscate
        })))
      }).then(
        // console.log('obfuscating', this.state)
        this.state.obfuscate ? b.reveal(1000) : b.start()
      )
    }
    setInterval(() => {
      setObfuscate()
    }, 1500)
    setInterval(() => {
      setText()
    }, 3000)
  }
  render() {
    const { classes } = this.props
    return (
      <React.Fragment>
        <Paper>
          <Typography className={classes.intro} variant="display4">
            <FormattedMessage
              id='app.header.greeting'
              defaultMessage="I'm Earl."
            />
          </Typography>
          <Typography className={classes.subtitle} variant="display1" component="p">
            <FormattedMessage
              id='app.header.subtitle'
              defaultMessage="Web Developer | Open Source Enthusiast | "
            />
            <br />
            <span className='baffle'>________</span>
          </Typography>
        </Paper>
      </React.Fragment>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
}

export default injectIntl(withStyles(styles)(Home))
