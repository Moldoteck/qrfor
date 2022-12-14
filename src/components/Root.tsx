import {
  classnames,
  container,
  height,
  margin,
  maxWidth,
  padding,
  width,
} from 'classnames/tailwind'
import { checkUserLoggedIn, preloadMagic } from 'helpers/magiclink'
import ChildrenProp from 'models/ChildrenProp'

const root = classnames(
  container('container'),
  margin('mx-auto'),
  padding('pb-10', 'py-4'),
  width('w-screen')
)

await checkUserLoggedIn()
export default function ({ children }: ChildrenProp) {
  return (
    <div className={root} onLoad={preloadMagic}>
      {children}
    </div>
  )
}
