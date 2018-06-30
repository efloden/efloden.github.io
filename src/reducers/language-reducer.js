import { handleActions } from 'redux-actions'
import { CHANGE_LOCALE } from '../actions/action-types'
import update from 'immutability-helper'
import { ENGLISH_STATE } from '../locales/en'

const defaultState = ENGLISH_STATE

const language = handleActions({
  [CHANGE_LOCALE]: (state, action) => {
    return update(state, {
      localeId: { $set: action.payload }
    })
  }
}, defaultState)

export default language
