import HeaderBlock from 'components/Header/HeaderBlock'
import MainBlock from 'components/MainBlock'
import Root from 'components/Root'
import { checkUserLoggedIn } from 'helpers/magiclink'

export default function () {
  return (
    <Root>
      <HeaderBlock />
      <MainBlock />
    </Root>
  )
}
