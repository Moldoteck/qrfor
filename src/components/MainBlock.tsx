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
  flexDirection('flex-col'),
  justifyContent('justify-center'),
  alignItems('items-center'),
  space('space-y-2'),
  height('h-full')
)

export default function () {
  const mg = useSnapshot(AppStore).magic
  const user = useSnapshot(AppStore).user
  //if not logged in, describe the app and show some images how pdf will get to qrcode
  //if logged in, save in local storrage user's email, show uploaded documents(1 free) and option to upgrade plan
  //for each slot- empty or with document, can replace, regenerate? inplace
  //so we need a slotblock component, a button to upgrade plan
  //also we need a profile page, where user can change email(migration of docs), can upgrade/downgrade plan and can delete account
  return (
    <div className={container}>
      <HeaderText>Frontend Template for Login</HeaderText>
    </div>
  )
}
