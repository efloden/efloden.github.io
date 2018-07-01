import { createAction } from 'redux-actions'
import {CHANGE_LOCALE} from './action-types'

// sets react-intl locale for app i18n
export const setAppLocale =
  createAction(CHANGE_LOCALE, (locale) => ({ locale }))
