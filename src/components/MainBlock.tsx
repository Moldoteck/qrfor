import { BodyText, HeaderText } from 'components/Text'
import { Suspense } from 'preact/compat'
import { loginUser, logoutUser } from 'helpers/magiclink'
import { useSnapshot } from 'valtio'
import AppStore from 'stores/AppStore'
import Button from 'components/Button'

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

export default function () {
  const mg = useSnapshot(AppStore).magic
  const user = useSnapshot(AppStore).user

  return !user ? (
    <div className={container}>
      <HeaderText>Frontend Template for Login</HeaderText>

      <Button
        title="Login"
        onClick={async () => {
          await loginUser()
        }}
        disabled={false}
      ></Button>
    </div>
  ) : (
    <div className={container}>
      <HeaderText>Frontend Tempolate for Logout</HeaderText>
      <Button
        title="Logout"
        onClick={async () => {
          await logoutUser()
        }}
        disabled={false}
      ></Button>
    </div>
  )
}
