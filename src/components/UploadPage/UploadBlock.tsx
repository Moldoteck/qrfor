import { HeaderText } from 'components/Text'
import { useSnapshot } from 'valtio'
import AppStore from 'stores/AppStore'

import classnames, {
  alignItems,
  appearance,
  backgroundColor,
  borderColor,
  borderRadius,
  borderStyle,
  borderWidth,
  cursor,
  display,
  flexDirection,
  fontFamily,
  height,
  justifyContent,
  margin,
  minHeight,
  minWidth,
  outlineStyle,
  padding,
  space,
  textAlign,
  textColor,
  transitionProperty,
  verticalAlign,
  width,
} from 'classnames/tailwind'
import Button from 'components/Button'
import { postData } from 'helpers/fileUploader'

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
)

const labelContainer = classnames(
  display('flex'),
  flexDirection('flex-col'),
  justifyContent('justify-center'),
  alignItems('items-center'),
  // width('w-full'),
  height('h-32'),
  padding('px-4'),
  transitionProperty('transition'),
  backgroundColor('bg-gray-900'),
  borderStyle('border-dashed'),
  borderColor('border-gray-300', 'hover:border-gray-400'),
  borderWidth('border-2'),
  borderRadius('rounded-md'),
  appearance('appearance-none'),
  cursor('cursor-pointer'),
  outlineStyle('focus:outline-none')
)

export default function ({ qrId }: { qrId: string }) {
  return (
    <div className={container}>
      <label className={labelContainer}>
        <span class="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
          <span class="font-medium text-gray-600">Browse files to attach</span>
        </span>
        <input id="file_upload" type="file" name="file_upload" class="hidden" />
      </label>
      <Button
        title="Upload"
        onClick={async () => {
          //upload file from file_upload to an url
          let file = document.getElementById('file_upload') as HTMLInputElement
          if (file.files && file.files.length > 0) {
            let formData = new FormData()
            formData.append('doc', file.files[0])
            await postData('MYSERVERIP', formData)
          }
        }}
      />
    </div>
  )
}
