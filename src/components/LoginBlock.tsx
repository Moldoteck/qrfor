import { HeaderText } from 'components/Text'
import { useSnapshot } from 'valtio'
import AppStore from 'stores/AppStore'

import classnames, {
  alignItems,
  backgroundColor,
  borderRadius,
  display,
  flexDirection,
  fontWeight,
  height,
  justifyContent,
  padding,
  space,
  textColor,
} from 'classnames/tailwind'
import { route } from 'preact-router'
import Button from './Button'
import { loginUserCode, loginUser } from 'helpers/magiclink'

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
        className={classnames(
          backgroundColor('bg-gray-500'),
          textColor('text-black-background'),
          fontWeight('font-bold'),
          padding('px-4', 'py-2'),
          borderRadius('rounded')
        )}
        onChange={handleEmailChange}
      />
      <Button
        title="Log in with email"
        onClick={async () => {
          AppStore.email
            ? await loginUser(AppStore.email)
            : alert('Please enter email')
        }}
        disabled={false}
      />
    </div>
  ) : (
    <div> </div>
  )
}
