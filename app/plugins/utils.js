// // eslint-disable-next-line no-unused-vars
import Vue from 'vue'

Vue.prototype.$getCookie = (cname) => {
  const name = cname + '='
  const decodedCookie = decodeURIComponent(document.cookie)
  const ca = decodedCookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    // eslint-disable-next-line eqeqeq
    while (c.charAt(0) == ' ') {
      c = c.substring(1)
    }
    // eslint-disable-next-line eqeqeq
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}

Vue.prototype.$setCookie = (cname, cvalue, exdays) => {
  const d = new Date()
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
  const expires = 'expires=' + d.toUTCString()
  document.cookie = cname + '=' + cvalue + ';' + expires
}

Vue.prototype.$getUrlParameter = (name) => {
  name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]')
  const regex = new RegExp('[\\?&]' + name + '=([^&#]*)')
  const results = regex.exec(location.search)
  return results === null
    ? ''
    : decodeURIComponent(results[1].replace(/\+/g, ' '))
}
