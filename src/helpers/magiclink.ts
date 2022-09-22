import { useSnapshot } from 'valtio'
import AppStore from 'stores/AppStore'

export async function loginUser(email = 'test@gmail.com') {
  const mg = AppStore.magic
  try {
    await mg.auth.loginWithMagicLink({ email })
    AppStore.user = email
    // router.push('/')
  } catch (err) {
    AppStore.user = null
    console.log(err)
    throw new Error('Email login failed')
  }
}

export async function logoutUser() {
  try {
    await AppStore.magic.user.logout()
    AppStore.user = null
  } catch (err) {
    throw new Error('User logout failed')
  }
}

const getToken = async () => {
  try {
    const mg = useSnapshot(AppStore).magic
    return await mg.user.getIdToken()
  } catch (err) {
    // throw new Error('Authenticate current session failed')
  }
  return null
}
export async function checkUserLoggedIn() {
  try {
    const isLoggedIn = await AppStore.magic.user.isLoggedIn()
    if (isLoggedIn) {
      const { email } = await AppStore.magic.user.getMetadata()
      AppStore.user = email
      return getToken()
    }
  } catch (err) {
    throw new Error('User is not logged in')
  }
  return null
}
