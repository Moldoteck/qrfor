import { useSnapshot } from 'valtio'
import AppStore from 'stores/AppStore'
import Button from 'components/Button'

import classnames, {
  alignItems,
  display,
  flex,
  flexDirection,
  justifyContent,
  padding,
  space,
  width,
} from 'classnames/tailwind'

const container = classnames(
  display('flex'),
  flexDirection('flex-row'),
  justifyContent('justify-start'),
  alignItems('items-center'),
  width('w-screen')
)

const h3class = classnames(padding('px-4', 'py-2'))
const tabsClass = classnames(
  display('flex'),
  justifyContent('justify-evenly'),
  alignItems('items-center'),
  space('space-x-2')
)

const nonLoginTabs = [
  {
    text: 'My QRs',
    callback: () => {},
    disabled: true,
  },
  {
    text: 'Pricing',
    callback: () => {},
    disabled: false,
  },
  {
    text: 'Contact',
    callback: () => {},
    disabled: false,
  },
  {
    text: 'About',
    callback: () => {},
    disabled: false,
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
        disabled={element.disabled}
      />
    )
  }
  return (
    <div className={container}>
      <h3 className={h3class}>QRfor.me</h3>
      <div className={tabsClass}>{btns}</div>

      {/* //Name or logoin left
      //padding
      //pages
      //login&logout button in the right */}
    </div>
  )
}
