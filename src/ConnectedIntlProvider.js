import { connect } from 'react-redux'
import { IntlProvider, addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import ja from 'react-intl/locale-data/ja'

addLocaleData([...en, ...ja])

// This function will map the current redux state to the props for the component that it is "connected" to.
// When the state of the redux store changes, this function will be called, if the props that come out of
// this function are different, then the component that is wrapped is re-rendered.
function mapStateToProps(state) {
  const { localeId, messages } = state.language
  return { locale: localeId, key: localeId, messages }
}

export default connect(mapStateToProps)(IntlProvider)
