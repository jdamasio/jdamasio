/* eslint no-console: ["error", { allow: ["error"] }] */
import axios from 'axios'
const WEBHOOK_API =
  'https://us-east-1.aws.webhooks.mongodb-stitch.com/api/client/v2.0/app/casaviva-front-wgpxc/service/casaviva_api/incoming_webhook/get_public_settings'

export const state = () => ({
  about_section: null,
  instagram_section: null
})

export const getters = {
  getAboutSection(state) {
    return state.about_section
  },
  getInstagramSection(state) {
    return state.instagram_section
  }
}

export const mutations = {
  ADD_ABOUT_SECTION(state, sectionData) {
    state.about_section = sectionData
  },
  ADD_INSTAGRAM_SECTION(state, instagramSection) {
    if (state.instagram_section) return
    state.instagram_section = instagramSection
  }
}

export const actions = {
  async getSettings({ commit }) {
    try {
      const response = await axios.get(WEBHOOK_API)
      const data = response.data

      if (!data) return
      data.map((item) => {
        item.id = item._id.$oid
        switch (item.key) {
          case 'secao_sobre_home':
            commit('ADD_ABOUT_SECTION', item)
            break
          case 'instagram_lastpics':
            commit('ADD_INSTAGRAM_SECTION', item)
            break
        }
      })
    } catch (e) {
      console.error(e)
    }
  }
}
