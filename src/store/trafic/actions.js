import axios from 'axios'

export function getSearchAll({
  commit
}) {

  axios
    .get('/search/' + search)
    .then(res => {

      console.log(res);

      if (res.data.searchAll !== 0) {
        commit('setSearchAll', res.data.searchAll)
      } else {
        commit('setSearchAll', [])
      }
    })

}
