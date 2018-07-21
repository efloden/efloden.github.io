import { handleActions } from 'redux-actions'
import { CHANGE_THEME } from '../actions/action-types'
import Themes from '../containers/Themes'
import update from 'immutability-helper'

const defaultState = {
  muiTheme: Themes.light
}

const muiTheme = handleActions({
  [CHANGE_THEME]: (state, action) => {
    return update(state, {
      muiTheme: { $set: action.payload.theme },
    })
  }
}, defaultState)

export default muiTheme
