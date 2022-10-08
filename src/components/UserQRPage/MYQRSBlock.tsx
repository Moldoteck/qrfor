import { HeaderText } from 'components/Text'
import { useSnapshot } from 'valtio'
import AppStore from 'stores/AppStore'

import classnames, {
  alignItems,
  display,
  flexDirection,
  flexWrap,
  height,
  justifyContent,
  margin,
  padding,
  space,
  width,
} from 'classnames/tailwind'
import QRBlock from './QRBlock'

const containerBase = classnames(
  display('flex'),
  flexDirection('flex-col'),
  justifyContent('justify-center'),
  alignItems('items-center'),
  margin('my-5'),
  // space('space-y-20'),
  // padding('py-20'),
  // width('w-64')
  // height('h-full')
)
const container = classnames(
  display('flex'),
  flexDirection('flex-row'),
  flexWrap('flex-wrap'),
  justifyContent('justify-center'),
  alignItems('items-center'),
  // space('space-y-2'),
  // padding('py-20'),
  // width('w-64')
  // height('h-full')
)

export default function () {
  //if not logged in, redirect to login
  let qrInfo: { link: string, name: string }[] = [{ link: 'https://i.ibb.co/TbrQ5L5/qrsample.png', name: 'Menu.pdf' }]
  let totalSlots: number = 15

  let slots = []
  for (let i = 0; i < totalSlots; i++) {
    if (i < qrInfo.length) {
      slots.push(
        <QRBlock link={qrInfo[i].link} name={qrInfo[i].name} />
      )
    } else {
      slots.push(<QRBlock link={''} name={'Empty'} />)
    }
  }
  return (
    <div className={containerBase}>
      <HeaderText>Your current QR's</HeaderText>
      <div className={container}>
        {slots}
      </div>
    </div>
  )
}
