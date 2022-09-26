import { useSnapshot } from 'valtio'
import AppStore from 'stores/AppStore'
import Button from 'components/Button'

import classnames, {
  alignItems,
  borderColor,
  borderRadius,
  borderStyle,
  borderWidth,
  cursor,
  display,
  flex,
  flexDirection,
  fontWeight,
  justifyContent,
  margin,
  padding,
  space,
  textColor,
  width,
} from 'classnames/tailwind'
import { route } from 'preact-router'

const container = classnames(
  display('flex'),
  flexDirection('flex-row'),
  justifyContent('justify-start'),
  alignItems('items-center'),
  width('w-screen')
)

const h3divclass = classnames(
  padding('px-4', 'py-2'),
  margin('mx-2'),
  borderStyle('border-dashed'),
  borderColor('border-white'),
  borderWidth('border-2'),
  borderRadius('rounded'),
  cursor('cursor-pointer'),
  )
const h3class = classnames(
  textColor('text-white'),
  fontWeight('font-bold'),
  )
const tabsClass = classnames(
  display('flex'),
  justifyContent('justify-evenly'),
  alignItems('items-center'),
  space('space-x-2')
)

const nonLoginTabs = [
  {
    text: 'My QRs',
    callback: () => { route('/myqrs') },
    disabled: true,
  },
  {
    text: 'Pricing',
    callback: () => { route('/pricing') },
    disabled: false,
  },
  {
    text: 'Contact',
    callback: () => { route('/contact') },
    disabled: false,
  },
  {
    text: 'About',
    callback: () => {route("/about")},
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
      
      <div className={h3divclass}>
      <h3 className={h3class} onClick={() => { route('/') }}>QRfor.me</h3>
      </div>
      <div className={tabsClass}>{btns}</div>

      {/* //Name or logoin left
      //padding
      //pages
      //login&logout button in the right */}
    </div>
  )
}
