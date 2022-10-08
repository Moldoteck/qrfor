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
  // padding('py')
  // // minWidth('215px'),
  // height('h-272'),
  // width('w-full'),
)

export default function ({ link, name }: { link: string, name: string }) {
  return (
    <div className={container}>
      <div className={classnames(
        display('flex'),
        justifyContent('justify-center'),
        alignItems('items-center'),
        margin('mx-2'),
        padding('p-2'),
        borderStyle('border-dashed'),
        borderColor('border-white'),
        borderWidth('border-2'),
        borderRadius('rounded'),
        width('w-40'),
        height('h-40'))}>
        {link ? (<img src={link} alt="qr code link" />) : (

          <h3 className={classnames(
            // height('h-full'),
            textAlign('text-center'),
            fontFamily('font-mono'),
            textColor('text-white')
          )}>{name}</h3>
        )}

      </div>
      <div className={classnames(space('space-y-2'))} >
        {
          link ? (<div className={classnames(space('space-y-2'))}>

            <h3 className={classnames(
              fontFamily('font-mono'),
              textColor('text-white')
            )}>{name}</h3>
            <div className={classnames(space('space-x-2'))} >
              <Button title='New QR'></Button>{/*ask if sure in popup, regenerate on confirm*/}
              <Button title='New Document'></Button>{/*redirect to upload doc page*/}
            </div>
            {/* justify evenly download and edit, delete under, full size */}
            <div className={classnames(space('space-y-2'),
              display('flex'),
              flexDirection('flex-col'),
              justifyContent('justify-center'),
              alignItems('items-center'),)} >
              <div className={classnames(space('space-x-2'),
                display('flex'),
                flexDirection('flex-row'),
                justifyContent('justify-evenly'),
                alignItems('items-center'),)} >
                <Button title='Download QR'></Button> {/*button should be full size, plus download icon, redirect to download qr code in different formats*/}
                <Button title='Edit style' ></Button>{/*button should be full size, redirect to style of qr page, add diff options*/}
              </div>
              <Button title='Delete' colorRed={true} fullSize={true}></Button>{/*button should be full size, ask if sure in popup, delete doc and qr on confirm*/}
            </div>
          </div>
          ) : (
            <div className={classnames(padding('pt-16', 'pb-16', 'px-10'))}>
              <Button title='Upload Document'></Button>{/*redirect to upload doc page*/}
            </div>
          )
        }
      </div>
    </div >
  )

}
