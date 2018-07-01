import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { setAppLocale } from '../../actions/language-actions'
import Locales from '../../locales'

class LanguageSelect extends React.Component {
  constructor() {
    super()
    this.state = {
      anchorEl: null,
    }
  }

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  handleLocaleSelect = (event) => {
    event.preventDefault()
    const id = event.target.id
    this.props.setLocale(Locales.find(locale => locale.localeId === id))
  }

  render() {
    const { locale } = this.props
    const { anchorEl } = this.state
    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'language-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          {locale && locale.displayName}
        </Button>
        <Menu
          id="language-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {Locales.map((locale, index) =>
            <MenuItem id={locale.localeId} onClick={this.handleLocaleSelect} key={index}>
              {locale.displayName}
            </MenuItem>
          )}
        </Menu>
      </div>
    )
  }
}

LanguageSelect.propTypes = {
  locale: PropTypes.any,
  setLocale: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return { 
    locale: state.language
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLocale: (locale) => {
      dispatch(setAppLocale(locale))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelect)