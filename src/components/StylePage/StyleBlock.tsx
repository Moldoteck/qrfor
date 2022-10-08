import { HeaderText } from 'components/Text'
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
  fontFamily,
  height,
  justifyContent,
  margin,
  minHeight,
  minWidth,
  padding,
  space,
  textAlign,
  textColor,
  verticalAlign,
  width,
} from 'classnames/tailwind'
import Button from 'components/Button'

const container = classnames(
  display('flex'),
  flexDirection('flex-col'),
  justifyContent('justify-center'),
  alignItems('items-center'),
  space('space-y-2', 'space-x-2'),

  margin('mx-2', 'my-2'),
  padding('p-2'),
  borderStyle('border-dashed'),
  borderColor('border-white'),
  borderWidth('border-2'),
  borderRadius('rounded'),
)
//dot form: dots or squares: just two options(no list)
//dot color: classic names+ picker with hex?
//Corner Form: dots, square, circle, squared circle
//Corner Color: classic names+ picker with hex?
//background color: classic names+ picker with hex?
//error correction: Normal, Extra
//reset button
//Save button
//download button
export default function () {
  return (
    <div className={container}>

    </div >
  )

}
