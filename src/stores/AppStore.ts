import { Magic } from 'magic-sdk'
import { proxy, subscribe } from 'valtio'
// import env from 'helpers/env'

class AppStore {
  magic = new Magic('pk_live_860B0D757154B259')
  user: null | string = null
  email: null | string = null
}

export default proxy(new AppStore())
