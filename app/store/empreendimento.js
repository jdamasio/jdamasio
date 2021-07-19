/* eslint no-console: ["error", { allow: ["error"] }] */
import axios from 'axios'
const WEBHOOK_API =
  'https://us-east-1.aws.webhooks.mongodb-stitch.com/api/client/v2.0/app/casaviva-front-wgpxc/service/casaviva_api/incoming_webhook/get_empreendimento_unique?slug='

export const state = () => ({
  emp_data: null
})

export const getters = {
  getEmpData(state) {
    return state.emp_data
  }
}

export const mutations = {
  ADD_EMP_DATA(state, pageData) {
    state.emp_data = pageData
  }
}

export const actions = {
  async getEmpData({ commit }, payload) {
    try {
      const response = await axios.get(WEBHOOK_API + payload.slug)
      const data = response.data

      if (!data) return

      data.id = data._id
      commit('ADD_EMP_DATA', data)
    } catch (e) {
      console.error(e)
    }
  }
}
