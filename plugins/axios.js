export default function ({ store, app: { $axios }, redirect }, inject) {
  const smargApi = $axios.create({
    baseURL: 'https://smarg-demo-v2.herokuapp.com/api/v1',
  })
  // smargApi.setBaseUrl('https://smarg-demo-v2.herokuapp.com/api/v1')

  //   const cloudinaryApi=$axios.create({baseUrl:""})
  smargApi.onRequest((config) => {
    // check if the user is authenticated

    if (store.state.auth.accessToken) {
      // set the Authorization header using the access token
      config.headers['x-access-token'] = store.state.auth.accessToken
    }

    return config
  })
  smargApi.onError((error) => {
    // check if the user is authenticated
    if (error.response.status === (401 || 400 || undefined)) {
      // console.log(error.response.status)
      store.commit('auth/logout')
      redirect('/login')
    }
  })
  inject('smargApi', smargApi)
}
