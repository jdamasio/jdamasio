/* eslint no-console: ["error", { allow: ["error"] }] */
import axios from 'axios'
const WEBHOOK_API =
  'https://us-east-1.aws.webhooks.mongodb-stitch.com/api/client/v2.0/app/casaviva-front-wgpxc/service/casaviva_api/incoming_webhook/get_empreendimentos'

export const state = () => ({
  emps_data: []
})

export const getters = {
  getEmpreendimentos(state) {
    return state.emps_data
  }
}

export const mutations = {
  ADD_EMPS(state, empsData) {
    if (state.emps_data.find((el) => el.id === empsData.id)) return
    state.emps_data.push(empsData)
  }
}

export const actions = {
  async getEmpreendimentosAct({ commit }) {
    try {
      const response = await axios.get(WEBHOOK_API)
      const data = response.data

      if (!data && state.emps_data === data) return

      data
        .sort((a, b) => a.order.$numberInt - b.order.$numberInt)
        .map((carousel) => {
          carousel.id = carousel._id.$oid
          commit('ADD_EMPS', carousel)
        })
      commit('ADD_EMPS', data)
    } catch (e) {
      console.error(e)
    }
  }
}
