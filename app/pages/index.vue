<template>
  <div id="page-index">
    <Carousel :items="carousel_home" />

    <DestaquesSection
      v-if="destaques_section"
      section-title="Destaques CasaViva"
      :emps-data="destaques_section.filter((item) => item.is_featured)"
    />

    <Simulacao />

    <section v-if="about_section" id="sobreCasaViva">
      <picture>
        <source
          media="(max-width: 767px)"
          :srcset="require('@/assets/images/sobre-home-mobile.jpg')"
        />
        <source
          :srcset="
            about_section.metadata.find((el) => el.key === 'url_banner').content
          "
        />
        <img
          :src="
            about_section.metadata.find((el) => el.key === 'url_banner').content
          "
          :alt="
            about_section.metadata.find((el) => el.key === 'url_banner').title
          "
          class="img-fluid"
        />
      </picture>
      <!-- sobre-home-mobile -->
      <div class="wrap-container">
        <div class="container_app">
          <el-row type="flex" align="middle" justify="center">
            <el-col :xs="24" :sm="12" class="st">
              <img
                width="435"
                height="185"
                :src="require('@/assets/images/cs_white_logo.svg')"
                alt="Logo CasaViva"
                class="img-fluid"
              />
              <h3>A Conquista da Casa da nova</h3>
            </el-col>
            <el-col :xs="24" :sm="12">
              <p>
                {{
                  about_section.metadata.find((el) => el.key === 'texto_sobre')
                    .content
                }}
              </p>

              <nuxt-link
                :to="
                  about_section.metadata.find((el) => el.key === 'botao_cta')
                    .content
                "
                class="btn-primary-white"
              >
                {{
                  about_section.metadata.find((el) => el.key === 'botao_cta')
                    .title
                }}
              </nuxt-link>
            </el-col>
          </el-row>
        </div>
      </div>
    </section>

    <InstagramSection :instagram-data="instagram_section" />

    <FaleConosco />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Carousel from '@/components/Carousel'
import FaleConosco from '@/components/FaleConosco'
import Simulacao from '@/components/Simulacao'
import DestaquesSection from '@/components/DestaquesSection'
import InstagramSection from '@/components/InstagramSection'

export default {
  components: {
    Carousel,
    FaleConosco,
    Simulacao,
    DestaquesSection,
    InstagramSection
  },
  async fetch({ store }) {
    try {
      if (store.getters['carousel/getCarouselHome'].length === 0)
        await store.dispatch('carousel/getCarouselAPI')

      if (store.getters['empreendimentos/getEmpreendimentos'].length === 0)
        await store.dispatch('empreendimentos/getEmpreendimentosAct')

      if (
        store.getters['settings/getAboutSection'] === null ||
        store.getters['settings/getInstagramSection'] === null
      )
        await store.dispatch('settings/getSettings')
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    }
  },
  computed: {
    ...mapGetters({
      carousel_home: 'carousel/getCarouselHome',
      destaques_section: 'empreendimentos/getEmpreendimentos',
      about_section: 'settings/getAboutSection',
      instagram_section: 'settings/getInstagramSection'
    })
  }
}
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 767px) {
  #sobreCasaViva {
    .el-row {
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: space-evenly;
      img {
        max-width: 19.5rem !important;
      }
    }
    .el-col {
      text-align: center;
    }
    .st {
      margin-bottom: 1.5rem;
      align-items: center !important;
    }
    h3 {
      font-size: 1.5rem !important;
    }

    p {
      text-align: center !important;
      font-size: 1.2rem !important;
    }
  }
}
@media only screen and (max-width: 340px) {
  #sobreCasaViva {
    p {
      font-size: 1.1rem !important;
    }
  }
}

#simulacaoSec {
  margin-bottom: 5.5rem;
}

#sobreCasaViva {
  position: relative;
  margin-bottom: 5.5rem;
  img {
    min-width: 100%;
    display: block;
  }
  .el-row {
    height: 100%;
    text-align: center;
    color: #fff;

    img {
      max-width: 27rem;
      margin-bottom: 1.25rem;
      min-width: unset;
      height: auto;
    }
  }

  .st {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  h3 {
    font-size: 1.875rem;
    font-weight: bold;
  }

  p {
    text-align: left;
    font-size: 1.15rem;
  }

  a {
    display: block;
    margin-top: 3rem;
    font-size: 1.2rem;
    padding: 1.1rem 0;
  }
}

#destaquesSection {
  padding-bottom: 6.75rem;
}
</style>
