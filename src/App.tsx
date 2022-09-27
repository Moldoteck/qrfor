import AboutBlock from 'components/AboutBlock'
import ContactBlock from 'components/ContactBlock'
import HeaderBlock from 'components/Header/HeaderBlock'
import LoginBlock from 'components/LoginBlock'
import MainBlock from 'components/MainBlock'
import MYQRSBlock from 'components/MYQRSBlock'
import PricingBlock from 'components/PricingBlock'
import Root from 'components/Root'
import { checkUserLoggedIn } from 'helpers/magiclink'
import { Router, Route, route } from 'preact-router'
import AppStore from 'stores/AppStore'
import { subscribe } from 'valtio'

let handleRoute = async (e: any) => {
  switch (e.url) {
    case '/profile':
      const isAuthed = await checkUserLoggedIn()
      if (!isAuthed) route('/', true)
      break
  }
}

await checkUserLoggedIn()
// subscribe(AppStore, () => {
//   localStorage.setItem('foo', JSON.stringify(AppStore))
// })
export default function () {
  return (
    <Root>
      <HeaderBlock />
      <Router onChange={handleRoute}>
        <Route path="/" component={MainBlock} />
        <Route path="/about" component={AboutBlock} />
        <Route path="/pricing" component={PricingBlock} />
        <Route path="/contact" component={ContactBlock} />
        <Route path="/myqrs" component={MYQRSBlock} />
        <Route path="/login" component={LoginBlock} />
      </Router>
    </Root>
  )
}
