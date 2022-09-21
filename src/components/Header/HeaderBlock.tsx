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
  height,
  justifyContent,
  space,
} from 'classnames/tailwind'

const container = classnames(
  display('flex'),
  flexDirection('flex-row'),
  justifyContent('justify-evenly'),
  alignItems('items-baseline'),
  space('space-y-2', 'space-x-2')
)

const h3class = classnames(
  display('flex'),
  justifyContent('justify-center'),
  alignItems('items-center')
)

const pagesClass = classnames(
  display('flex'),
  justifyContent('justify-center'),
  alignItems('items-center')
)

const buttondivclass = classnames(
  display('flex'),
  justifyContent('justify-center'),
  alignItems('items-end')
)

export default function () {
  const user = useSnapshot(AppStore).user
  return (
    <header className={container}>
      <h3 className={h3class}>QRfor.me</h3>
      {/* //Name or logoin left
      //padding
      //pages
      //login&logout button in the right */}
      <div className={buttondivclass}>
        {!user ? (
          <Button
            title="Log in"
            onClick={async () => {
              await loginUser()
            }}
            disabled={false}
          />
        ) : (
          <Button
            title="Log out"
            onClick={async () => {
              await logoutUser()
            }}
            disabled={false}
          />
        )}
      </div>
    </header>
  )
}
