import { HeaderText } from 'components/Text'
import { useSnapshot } from 'valtio'
import AppStore from 'stores/AppStore'

import classnames, {
  alignItems,
  display,
  flexDirection,
  height,
  justifyContent,
  space,
} from 'classnames/tailwind'
import { route } from 'preact-router'
import Button from './Button'
import { loginUser } from 'helpers/magiclink'

const container = classnames(
  display('flex'),
  flexDirection('flex-col'),
  justifyContent('justify-center'),
  alignItems('items-center'),
  space('space-y-2'),
  height('h-full')
)
let handleEmailChange = async (e: any) => {
  //set email in AppStore
  AppStore.email = e.target.value
}

export default function () {
  const user = useSnapshot(AppStore).user
  if (user) {
    route('/', true)
  }
  return !user ? (
    <div className={container}>
      <input
        id="emailfield"
        type="text"
        placeholder="email"
        onChange={handleEmailChange}
      />
      <Button
        title="Log in"
        onClick={async () => {
          AppStore.email
            ? await loginUser(AppStore.email)
            : alert('Please enter email')
        }}
        disabled={false}
      />
      <HeaderText>This is login block</HeaderText>
    </div>
  ) : (
    <div> </div>
  )
}
