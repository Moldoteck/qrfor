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

const container = classnames(
  display('flex'),
  flexDirection('flex-col'),
  justifyContent('justify-center'),
  alignItems('items-center'),
  space('space-y-2'),
  height('h-full')
)

export default function () {
  // const mg = useSnapshot(AppStore).magic
  const user = useSnapshot(AppStore).user
  //if logged in, just text form and send button
  //if not logged in, email placeholder, text form and send button
  return (
    <div className={container}>
      <HeaderText>This is contact block</HeaderText>
    </div>
  )
}
