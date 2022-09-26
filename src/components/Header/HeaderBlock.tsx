import classnames, {
  alignItems,
  display,
  flexDirection,
  justifyContent,
  space,
} from 'classnames/tailwind'
import LeftHeaderBlock from './LeftHeaderBlock'
import RightHeaderBlock from './RightHeaderBlock'

const container = classnames(
  display('flex'),
  flexDirection('flex-row'),
  justifyContent('justify-evenly'),
  alignItems('items-center'),
  space('space-x-2')
)

export default function () {
  return (
    <header className={container}>
      <LeftHeaderBlock />
      <RightHeaderBlock />
    </header>
  )
}
