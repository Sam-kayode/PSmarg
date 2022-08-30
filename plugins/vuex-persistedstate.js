import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'
import cookie from 'cookie'

export default ({ store, req, isDev }) => {
  createPersistedState({
    key: 'smarg',
    paths: [
      'auth.accessToken',
      'auth.refreshToken',
      'auth.user',
      'auth.currentContract',
    ],
    storage: {
      getItem: (key) => {
        if (process.server) {
          const parsedCookies = cookie.parse(req.headers.cookie ?? '')
          return parsedCookies[key]
        } else {
          return Cookies.get(key)
        }
      },
      setItem: (key, value) =>
        Cookies.set(key, value, {
          path: '/',
          expires: new Date(Date.now() + (1 * 864e5) / 2),
          secure: !isDev,
          SameSite: 'strict',
        }),
      removeItem: (key) => Cookies.remove(key),
    },
  })(store)
}
