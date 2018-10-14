import React, {Component} from 'react'
import PropTypes from 'prop-types'
import baffle from 'baffle'
import { FormattedMessage, injectIntl, defineMessages } from 'react-intl'
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
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }
  return array
}


const messages = defineMessages({
  one: {
    id: 'app.header.sub2',
    defaultMessage: 'Night Owl',
  },
  two: {
    id: 'app.header.sub3',
    defaultMessage: 'Digital Designer',
  },
  three: {
    id: 'app.header.sub4',
    defaultMessage: 'Computer Whisperer',
  },
  four: {
    id: 'app.header.sub5',
    defaultMessage: 'ECMAScripter',
  },
})



class Home extends Component {
  digest = [
    this.props.intl.formatMessage(messages.one),
    this.props.intl.formatMessage(messages.two),
    this.props.intl.formatMessage(messages.three),
    this.props.intl.formatMessage(messages.four), 
  ]
  state = {
    update: true,
    obfuscate: true,
    current: this.digest[0]
  }
  componentDidMount() {
    let b = baffle('.baffle', {
      characters: '/*<█▒░ ',
      speed: 150
    })
    b.start()
    b.text(_ => this.state.current)
    setInterval(() => {
      this.setState((prevState) => ({
        obfuscate: !prevState.obfuscate,
        current: shuffle(this.digest)[0]
      }))
      // b.text(_ => this.state.current)
      this.state.obfuscate ? b.reveal(1000) : b.start()
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
            <span className='baffle'>___</span>
          </Typography>

          {/* <div>
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
          </div> */}
        </Paper>
      </React.Fragment>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
}

export default injectIntl(withStyles(styles)(Home))
