import { HeaderText } from '../Text'
import { useSnapshot } from 'valtio'
import AppStore from 'stores/AppStore'

import classnames, {
  alignItems,
  borderColor,
  borderRadius,
  borderStyle,
  borderWidth,
  display,
  flexDirection,
  fontStyle,
  height,
  justifyContent,
  padding,
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

const listContainer = classnames(
  display('flex'),
  flexDirection('flex-col'),
  justifyContent('justify-start'),
  alignItems('items-start'),
  space('space-y-2'),
  // height('h-full') 
)

export default function () {
  // const mg = useSnapshot(AppStore).magic
  const user = useSnapshot(AppStore).user
  return (
    <div className={container}>
      <HeaderText>Handle easily your menus and QR codes!</HeaderText>
      <div className={listContainer}>
        <HeaderText>1. Upload a PDF document or an image</HeaderText>
        <HeaderText>2. Get a QR code in any <span className={classnames(
          borderStyle('border-dashed'),
          borderColor('border-white'),
          borderWidth('border-2'),
          borderRadius('rounded'),
          padding('px-1'))}>form</span> and <span className={classnames(fontStyle('italic'))}>style</span></HeaderText>
        <HeaderText>3. Print it</HeaderText>
      </div>
    </div>
  )
}



