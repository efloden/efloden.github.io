import { createMuiTheme } from '@material-ui/core/styles'

const Themes = {
  light: createMuiTheme({
    palette: {
      type: 'light',
    },
    cloud: 'grey'
  }),
  dark: createMuiTheme({
    palette: {
      type: 'dark',
    },
    cloud: 'grey'
  })
}

export default Themes