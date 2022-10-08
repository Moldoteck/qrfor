import AboutBlock from 'components/AboutPage/AboutBlock'
import ContactBlock from 'components/ContactPage/ContactBlock'
import HeaderBlock from 'components/Header/HeaderBlock'
import LoginBlock from 'components/LoginBlock'
import MainBlock from 'components/MainBlock'
import MYQRSBlock from 'components/UserQRPage/MYQRSBlock'
import PricingBlock from 'components/PricingBlock'
import Root from 'components/Root'
import { checkUserLoggedIn } from 'helpers/magiclink'
import { Router, Route, route } from 'preact-router'
import { Suspense } from 'preact/compat'
import AppStore from 'stores/AppStore'
import { subscribe } from 'valtio'
import classnames, { margin } from 'classnames/tailwind'

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
    <Suspense fallback={<div>Loading...</div>}>
      <Root>
        <HeaderBlock />
        <div className={classnames(
          margin('mt-28'))}>
          <Router onChange={handleRoute}>
            <Route path="/" component={MainBlock} />
            <Route path="/about" component={AboutBlock} />
            <Route path="/pricing" component={PricingBlock} />
            <Route path="/contact" component={ContactBlock} />
            <Route path="/myqrs" component={MYQRSBlock} />
            <Route path="/login" component={LoginBlock} />
          </Router>
        </div>
      </Root>
    </Suspense>
  )
}
