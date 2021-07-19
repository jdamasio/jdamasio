/* eslint no-console: ["error", { allow: ["error"] }] */
import axios from 'axios'
const WEBHOOK_API =
  'https://us-east-1.aws.webhooks.mongodb-stitch.com/api/client/v2.0/app/casaviva-front-wgpxc/service/casaviva_api/incoming_webhook/get_page_cookies'

export const state = () => ({
  cookies_data: null
})

export const getters = {
  getCookiesData(state) {
    return state.cookies_data
  }
}

export const mutations = {
  ADD_PAGE_DATA(state, pageData) {
    state.cookies_data = pageData
  }
}

export const actions = {
  async getPageData({ commit }) {
    try {
      const response = await axios.get(WEBHOOK_API)
      const data = response.data

      if (!data) return

      data.id = data._id.$oid
      commit('ADD_PAGE_DATA', data)
    } catch (e) {
      console.error(e)
    }
  }
}
