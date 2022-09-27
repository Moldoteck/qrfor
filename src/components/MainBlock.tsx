import { BodyText, HeaderText } from 'components/Text'
import { Suspense } from 'preact/compat'
import { loginUser, logoutUser } from 'helpers/magiclink'
import { useSnapshot } from 'valtio'
import AppStore from 'stores/AppStore'
import Button from 'components/Button'

import classnames, {
  alignItems,
  display,
  flexDirection,
  fontFamily,
  height,
  justifyContent,
  padding,
  space,
  textColor,
  width,
} from 'classnames/tailwind'
import OptionButton from './OptionButton'

const container = classnames(
  display('flex'),
  flexDirection('flex-col'),
  justifyContent('justify-center'),
  alignItems('items-center'),
  space('space-y-2'),
  height('h-full')
)

const buttonContainer = classnames(
  display('flex'),
  flexDirection('flex-row'),
  justifyContent('justify-center'),
  alignItems('items-center'),
  width('w-full'),
  space('space-x-2')
)

const imageContainer = classnames(
  display('flex'),
  flexDirection('flex-col'),
  justifyContent('justify-center'),
  alignItems('items-center'),
  space('space-y-1'),
  padding('p-1')
)

export default function () {
  // const mg = useSnapshot(AppStore).magic
  // const user = useSnapshot(AppStore).user
  //if not logged in, describe the app and show some images how pdf will get to qrcode
  //if logged in, save in local storrage user's email, show uploaded documents(1 free) and option to upgrade plan
  //for each slot- empty or with document, can replace, regenerate? inplace
  //so we need a slotblock component, a button to upgrade plan
  //also we need a profile page, where user can change email(migration of docs), can upgrade/downgrade plan and can delete account

  //on front page: instruction in Three steps: 1. upload pdf 2. get qrcode 3. print your qrcode and put it everywhere
  return (
    <div className={container}>
      <HeaderText>Get QR codes</HeaderText>
      <HeaderText>for your files</HeaderText>
      <div className={imageContainer}>
        <div
          className={classnames(
            display('flex'),
            flexDirection('flex-row'),
            justifyContent('justify-center'),
            alignItems('items-center'),
            space('space-x-2')
          )}
        >
          <div
            className={classnames(
              display('flex'),
              flexDirection('flex-col'),
              justifyContent('justify-center'),
              alignItems('items-center'),
              space('space-x-2')
            )}
          >
            <img
              src="https://i.ibb.co/q1dCB8x/icons8-pdf-64.png"
              className={width('w-32')}
            />
            <h3
              className={classnames(
                fontFamily('font-mono'),
                textColor('text-white')
              )}
            >
              Upload your <br />
              documents
            </h3>
          </div>

          <h3
            className={classnames(
              fontFamily('font-mono'),
              textColor('text-white')
            )}
          >
            ----------&gt;
          </h3>
          <div
            className={classnames(
              display('flex'),
              flexDirection('flex-col'),
              justifyContent('justify-center'),
              alignItems('items-center'),
              space('space-x-2')
            )}
          >
            <img
              src="https://i.ibb.co/TbrQ5L5/qrsample.png"
              className={width('w-32')}
            />
            <h3
              className={classnames(
                fontFamily('font-mono'),
                textColor('text-white')
              )}
            >
              Get QR code
            </h3>
          </div>

          <h3
            className={classnames(
              fontFamily('font-mono'),
              textColor('text-white')
            )}
          >
            ----------&gt;
          </h3>
          <div
            className={classnames(
              display('flex'),
              flexDirection('flex-col'),
              justifyContent('justify-center'),
              alignItems('items-center'),
              space('space-x-2')
            )}
          >
            <img
              src="https://i.ibb.co/cypf4zb/icons8-print-100.png"
              className={width('w-32')}
            />
            <h3
              className={classnames(
                fontFamily('font-mono'),
                textColor('text-white')
              )}
            >
              Print it <br />
              anywhere
            </h3>
          </div>
        </div>
        <div className={buttonContainer}>
          <OptionButton
            title="Test it"
            onClick={async () => {}}
            disabled={false}
          />
          <OptionButton
            title="Ok, I'm in"
            onClick={async () => {}}
            disabled={false}
          />
        </div>
      </div>
    </div>
  )
}
