import { combineReducers } from 'redux'
import language from './language-reducer'
import theme from './theme-reducer'

const rootReducer = combineReducers({
  language,
  theme
})

export default rootReducer
