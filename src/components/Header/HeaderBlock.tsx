import classnames, {
  alignItems,
  display,
  flexDirection,
  inset,
  justifyContent,
  position,
  space,
  zIndex,
} from 'classnames/tailwind'
import LeftHeaderBlock from './LeftHeaderBlock'
import RightHeaderBlock from './RightHeaderBlock'

const container = classnames(
  display('flex'),
  flexDirection('flex-row'),
  justifyContent('justify-evenly'),
  alignItems('items-center')
  // space('space-x-2')
  // position('sticky'),
  // inset('top-0'),
  // zIndex('z-50')
)

export default function () {
  return (
    <header className={container}>
      <LeftHeaderBlock />
      <RightHeaderBlock />
    </header>
  )
}
