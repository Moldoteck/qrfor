import { proxy } from 'valtio'
import { Magic } from 'magic-sdk'
import getUserCount from 'helpers/getUserCount'
// import env from 'helpers/env'

class AppStore {
  userCount = getUserCount()
  magic: any = new Magic('pk_live_860B0D757154B259')
  user: null | string = null
}

export default proxy(new AppStore())
