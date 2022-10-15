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
  space,
} from 'classnames/tailwind'
import PriceOptionBlock from './PriceOptionBlock'

const container = classnames(
  display('flex'),
  flexDirection('flex-row'),
  justifyContent('justify-center'),
  alignItems('items-start'),
  height('h-full'),
  flexWrap('flex-wrap'),
)

export default function () {
  // const mg = useSnapshot(AppStore).magic
  const user = useSnapshot(AppStore).user
  return (
    <div className={container}>
      {/* <HeaderText>This is pricing block</HeaderText> */}
      <PriceOptionBlock title='Starter' featureList={["1 QR slot", "Unlimited edits", "Unlimited validity"]}></PriceOptionBlock>
      <PriceOptionBlock title='Starter+' featureList={["5 QR slots", "Unlimited edits", "Unlimited validity"]}></PriceOptionBlock>
      <PriceOptionBlock title='Full' featureList={["15 QR slots", "Unlimited edits", "Unlimited validity", "QR style options"]}></PriceOptionBlock>
    </div>
  )
}
