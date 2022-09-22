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
  width,
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
  justifyContent('justify-start'),
  alignItems('items-start'),
  width('w-screen')
)

const pagesClass = classnames(
  display('flex'),
  justifyContent('justify-center'),
  alignItems('items-center')
)

const buttondivclass = classnames(
  display('flex'),
  justifyContent('justify-end'),
  alignItems('items-end'),
  width('w-full')
)

const nonLoginTabs = [
  {
    text: 'Hello1',
    callback: () => {},
  },
  {
    text: 'Hello2',
    callback: () => {},
  },
  {
    text: 'Hello3',
    callback: () => {},
  },
  {
    text: 'Hello4',
    callback: () => {},
  },
]

export default function () {
  const user = useSnapshot(AppStore).user
  let btns: any[] = []
  for (let i = 0; i < nonLoginTabs.length; i++) {
    let element = nonLoginTabs[i]
    btns.push(
      <Button
        title={element.text}
        onClick={async () => {
          await element.callback()
        }}
        disabled={false}
      />
    )
  }
  return (
    <header className={container}>
      <h3 className={h3class}>QRfor.me</h3>
      {btns}
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
