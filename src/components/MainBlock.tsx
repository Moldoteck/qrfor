import { BodyText, HeaderText } from 'components/Text'
import { render, Suspense } from 'preact/compat'
import UserCount from 'components/UserCount'
import classnames, {
  alignItems,
  display,
  flexDirection,
  justifyContent,
  space,
} from 'classnames/tailwind'

const container = classnames(
  display('flex'),
  flexDirection('flex-col'),
  justifyContent('justify-center'),
  alignItems('items-center'),
  space('space-y-2')
)

import { proxy, useSnapshot } from 'valtio'
import AppStore from 'stores/AppStore'
import Button from './Button'
import NAPP from 'NAPP'

const loginUser = async (
  // mg: any,
  // user: any,
  email: string = 'inacristea1997@gmail.com'
) => {
  let mg = AppStore.magic
  // let user = AppStore.user
  try {
    await mg.auth.loginWithMagicLink({ email })
    AppStore.user = email

    // render(<NAPP />, document.getElementById('root') as Element)
    // router.push('/')
  } catch (err) {
    AppStore.user = null
    console.log(err)
    throw new Error('Email login failed')
  }
}

const checkUserLoggedIn = async () => {
  try {
    let mg = useSnapshot(AppStore).magic
    let user = useSnapshot(AppStore).user
    const isLoggedIn = await mg.user.isLoggedIn()
    if (isLoggedIn) {
      const { email } = await mg.user.getMetadata()
      user = email
      return getToken()
    }
  } catch (err) {
    // throw new Error('User is not logged in')
  }
  return null
}

const getToken = async () => {
  try {
    let mg = useSnapshot(AppStore).magic
    return await mg.user.getIdToken()
  } catch (err) {
    // throw new Error('Authenticate current session failed')
  }
  return null
}
const logoutUser = async () => {
  try {
    await AppStore.magic.user.logout()
    AppStore.user = null
  } catch (err) {
    throw new Error('User logout failed')
  }
}

export default function () {
  let mg = useSnapshot(AppStore).magic
  let user = useSnapshot(AppStore).user

  return !user ? (
    <div className={container}>
      <HeaderText>Frontend Template for Login</HeaderText>
      <Suspense fallback={<BodyText>Loading...</BodyText>}>
        <UserCount />
      </Suspense>
      <Button
        title="Login"
        onClick={async () => {
          loginUser()
        }}
        disabled={false}
      ></Button>
      {/* <button onClick={async () => await loginUser(mg, user)}>Log in</button> */}
    </div>
  ) : (
    <div className={container}>
      <HeaderText>Frontend Tempolate for Logout</HeaderText>
      <Suspense fallback={<BodyText>Loading...</BodyText>}>
        <UserCount />
      </Suspense>
      <Button
        title="Logout"
        onClick={() => {
          logoutUser()
        }}
        disabled={false}
      ></Button>
      {/* <button onClick={async () => await logoutUser(mg, user)}>Log out</button> */}
    </div>
  )
}
