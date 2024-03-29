import {
  boot
} from 'quasar/wrappers'
import axios from 'axios'

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({
  baseURL: 'http://31.33.145.219:4000/'
})

export default boot(({
  app
}) => {

  app.config.globalProperties.$axios = axios;
  axios.defaults.baseURL = 'http://31.33.145.219:4000'; // Dev
  axios.defaults.withCredentials = true;
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api;
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests agains
})

export {
  api
}
