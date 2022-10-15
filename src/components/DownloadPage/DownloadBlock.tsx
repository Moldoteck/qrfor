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
  borderRadius('rounded')
  // padding('py')
  // // minWidth('215px'),
  // height('h-272'),
  // width('w-full'),
)

export default function () {
  return
}
