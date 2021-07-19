/* eslint no-console: ["error", { allow: ["error"] }] */
import axios from 'axios'
const WEBHOOK_API =
  'https://us-east-1.aws.webhooks.mongodb-stitch.com/api/client/v2.0/app/casaviva-front-wgpxc/service/casaviva_api/incoming_webhook/get_carousels'

export const state = () => ({
  carousel_home: []
})

export const getters = {
  getCarouselHome(state) {
    return state.carousel_home
  },
  getShowcaseEmps(state) {
    return state.carousel_home.filter((item) => item.type !== 'institucional')
  }
}

export const mutations = {
  ADD_CAROUSEL_ITEM(state, carouselItem) {
    if (state.carousel_home.find((el) => el.id === carouselItem.id)) return
    state.carousel_home.push(carouselItem)
  }
}

export const actions = {
  async getCarouselAPI({ state, commit }) {
    try {
      const response = await axios.get(WEBHOOK_API)
      const data = response.data

      // Checa se houve mudança nos carouseis antes de commitar ou se a resposta tem dados
      if (!data && state.carousel_home === data) return

      data
        .sort((a, b) => a.order.$numberInt - b.order.$numberInt)
        .map((carousel) => {
          carousel.id = carousel._id.$oid
          commit('ADD_CAROUSEL_ITEM', carousel)
        })
    } catch (e) {
      console.error(e)
    }
  }
}
