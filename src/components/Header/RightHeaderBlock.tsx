import { loginUser, logoutUser } from 'helpers/magiclink'
import { subscribe, useSnapshot } from 'valtio'
import AppStore from 'stores/AppStore'
import Button from 'components/Button'

import classnames, {
  alignItems,
  display,
  justifyContent,
  width,
} from 'classnames/tailwind'

const container = classnames(
  display('flex'),
  justifyContent('justify-end'),
  alignItems('items-center'),
  width('w-full')
)

export default function () {
  const user = useSnapshot(AppStore).user
  return (
    <div className={container}>
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
  )
}
