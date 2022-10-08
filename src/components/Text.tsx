import {
  classnames,
  fontFamily,
  fontSize,
  fontWeight,
  textAlign,
  textColor,
} from 'classnames/tailwind'
import ChildrenProp from 'models/ChildrenProp'

const whiteText = classnames(textColor('text-white'))
const grayText = classnames(textColor('text-gray-300'))

const headerText = classnames(
  whiteText,
  fontSize('text-2xl', 'md:text-4xl'),
  fontWeight('font-bold'),
  textAlign('text-center'),
  fontFamily('font-mono')
)
export function HeaderText({ children }: ChildrenProp) {
  return <p className={headerText}>{children}</p>
}

const bodyText = classnames(grayText, textAlign('text-center'))
export function BodyText({ children }: ChildrenProp) {
  return <p className={bodyText}>{children}</p>
}
