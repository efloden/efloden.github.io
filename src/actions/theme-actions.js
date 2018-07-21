import { createAction } from 'redux-actions'
import {CHANGE_THEME} from './action-types'

// sets Material UI Theme
export const setAppTheme =
  createAction(CHANGE_THEME, (theme) => ({ theme }))
