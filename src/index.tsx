import 'index.css'
import { checkUserLoggedIn } from 'helpers/magiclink'
import { render } from 'preact'
import App from 'App'
// import env from 'helpers/env'

render(<App />, document.getElementById('root') as Element)
