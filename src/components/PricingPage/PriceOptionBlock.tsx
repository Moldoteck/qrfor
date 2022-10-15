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
  flex,
  flexDirection,
  fontFamily,
  fontWeight,
  height,
  justifyContent,
  listStyleType,
  margin,
  padding,
  space,
  textAlign,
  textColor,
  width,
} from 'classnames/tailwind'
import Button from 'components/Button'

const container = classnames(
  display('flex'),
  flexDirection('flex-col'),
  justifyContent('justify-start'),
  alignItems('items-center'),
  space('space-y-2'),

  margin('mx-6', 'my-2'),
  padding('p-2'),
  borderStyle('border-dashed'),
  borderColor('border-white'),
  borderWidth('border-2'),
  borderRadius('rounded'),
  // padding('py')
  // // minWidth('215px'),
  height('h-80'),
  // width('w-full'),
)
// Upload document& new document should trigger immediatly file selection and upload on selection, or abort on cancel
export default function ({ title, featureList }: { title: string; featureList: string[] }) {
  return (
    <div className={container}>
      <div
        className={classnames(
          display('flex'),
          justifyContent('justify-center'),
          alignItems('items-center'),
          margin('mx-2'),
          padding('p-2'),
          borderStyle('border-dashed'),
          borderColor('border-white'),
          borderWidth('border-2'),
          borderRadius('rounded'),
          width('w-56'),
          height('h-20')
        )}
      >
        <h2
          className={classnames(
            // height('h-full'),
            textAlign('text-center'),
            fontFamily('font-mono'),
            textColor('text-white'),
            fontWeight('font-bold')
          )}
        >
          {title}
        </h2>
      </div>
      <div
        className={classnames(
          display('flex'),
          justifyContent('justify-center'),
          alignItems('items-start'),
          margin('mx-2'),
          padding('p-2'),
          borderStyle('border-dashed'),
          borderColor('border-white'),
          borderWidth('border-2'),
          borderRadius('rounded'),
          width('w-56'),
          height('h-full')
        )}
      >
        <ul
          className={classnames(
            // height('h-full'),
            textAlign('text-left'),
            fontFamily('font-mono'),
            textColor('text-white'),
            listStyleType('list-disc')
          )}
        >
          {featureList.map((feature) => (
            <li className={classnames(margin('ml-4'))}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className={classnames(space('space-y-2'),
        display('flex'), width('w-full'), padding('px-2'))}>
        {/* <div > */}
        {/* deactivate button if subscribed? */}
        <Button title="Subscribe" fullSize={true}></Button>
        {/*redirect to upload doc page*/}
        {/* </div> */}
      </div>
    </div>
  )
}
