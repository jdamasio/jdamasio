<template>
  <div v-if="pageData" id="page-sobre">
    <section id="banner-sobre">
      <img
        :src="pageData.banner_url"
        :alt="pageData.banner_alt"
        class="img-fluid"
      />
    </section>

    <section id="infos-sobre">
      <div class="container_app">
        <el-row class="st" type="flex" align="middle" :gutter="20">
          <el-col :xs="24" :sm="12">
            <h1>
              {{ pageData.metadata.find((item) => item.key === 'about').title }}
            </h1>
            <p
              :inner-html.prop="
                pageData.metadata.find((item) => item.key === 'about').content
                  | formatBreakLine
              "
            ></p>
          </el-col>

          <el-col :xs="24" :sm="12">
            <img
              :src="
                pageData.metadata.find((item) => item.key === 'about_image')
                  .content
              "
              :alt="
                pageData.metadata.find((item) => item.key === 'about_image')
                  .title
              "
              class="img-fluid"
            />
          </el-col>
        </el-row>
      </div>

      <div class="container_app">
        <el-row id="details-sobre">
          <el-col :xs="24" :sm="4">
            <h3>
              CasaViva
              <br />
              em números
            </h3>
          </el-col>

          <el-col :xs="24" :sm="19" :offset="1" class="list">
            <el-row :gutter="50">
              <el-col
                v-for="(detail, index) in pageData.features"
                :key="index"
                :xs="12"
                :sm="6"
                class="item"
              >
                <table>
                  <tr>
                    <td><i :class="`cv-icons ${detail.icon_slug}`"></i></td>
                    <td>
                      <h4>{{ detail.title }}</h4>
                      <p>{{ detail.content }}</p>
                    </td>
                  </tr>
                </table>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
    </section>

    <section id="our-team">
      <h2 class="container_app">Nosso Time</h2>
      <VueSlickCarousel v-if="pageData.team.length > 0" v-bind="slickOptions">
        <div v-for="item in pageData.team" :key="item.id" class="item">
          <img :src="item.avatar" :alt="`Foto de ${item.name}`" />
          <div>
            <h4>{{ item.name }}</h4>
            <p>
              {{ item.description | removeQuotes }}
            </p>
          </div>
        </div>
      </VueSlickCarousel>
    </section>

    <FaleConosco />
  </div>
</template>

<script>
// import axios from 'axios'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import { mapGetters } from 'vuex'
import FaleConosco from '@/components/FaleConosco'

export default {
  components: {
    FaleConosco,
    VueSlickCarousel
  },
  async fetch({ store }) {
    try {
      if (store.getters['sobre/getAboutData'] === null)
        await store.dispatch('sobre/getPageData')
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    }
  },
  data() {
    return {
      slickOptions: {
        arrows: false,
        dots: true,
        dotsClass: 'slick-dots crslDots',
        edgeFriction: 0.35,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1600,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      }
    }
  },
  computed: {
    ...mapGetters({
      pageData: 'sobre/getAboutData'
    })
  }
}
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 767px) {
  #infos-sobre {
    .el-row {
      flex-wrap: wrap;
    }

    .container_app:first-child {
      padding: 0 !important;
    }

    .st {
      padding: 3.5rem 0 4.5rem 0 !important;
      margin: 0 !important;

      .el-col:first-child {
        margin-bottom: 3.5rem;
        padding: 0 1.75rem 0 1.75rem !important;
      }

      .el-col:nth-child(2) {
        padding: 0 !important;
      }

      p {
        padding-right: 0 !important;
      }
    }
  }

  #details-sobre {
    margin-bottom: 3.5rem !important;
    .list {
      margin-left: 0 !important;
      margin-top: 3rem;
    }
  }

  table {
    td {
      display: block;
    }
  }

  .item {
    margin-bottom: 2rem;
  }
}

h2 {
  @include appTitle(1.75rem);
}

.container_app {
  display: flex;
  align-items: center;
}

#banner-sobre {
  position: relative;
  img {
    min-width: 100%;
    max-width: 100%;
    display: block;
  }
}

#infos-sobre {
  .st {
    padding: 3rem 0 4.5rem 0;
    img {
      display: block;
      min-width: 100%;
    }
    h1 {
      @include appTitle(1.875rem);
    }
    p {
      @include appText;
      padding-right: 3rem;
      line-height: 1.5;
    }
  }

  #details-sobre {
    width: 100%;
    margin-bottom: 5rem;
    border-top: 1px solid rgba($color: #010101, $alpha: 0.1);
    border-bottom: 1px solid rgba($color: #010101, $alpha: 0.1);
    padding: 2.5rem 0 2.5rem 0;

    h3 {
      @include appTitle(0);
      // span {
      //   color: $flat-blue;
      //   &:nth-child(2) {
      //     margin-right: -0.5rem;
      //   }

      //   &:first-child {
      //     color: $cherry;
      //   }
      // }
    }

    h4 {
      @include appText;
      @include colorizedSubtitle($qs-blue, 0.4rem);
      margin-top: 0.3rem;
    }

    i {
      width: 2rem;
    }

    table td {
      vertical-align: top;
      min-width: 2rem;
    }

    p {
      @include appText;
    }
  }
}

#our-team {
  padding: 0 2.5rem;
  padding-bottom: 8rem;

  h2 {
    @include appTitle(3rem);
  }

  .el-col {
    margin-bottom: 2.5rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .item {
    cursor: pointer;
    outline: none;
    &:hover,
    &:active {
      img {
        opacity: 1;
      }
    }
    img {
      @include img-fluid;
      border-radius: 0.625rem;
      margin-bottom: 1.25rem;
      opacity: 0.71;
      transition: opacity 0.3s ease-in;
      min-width: 100%;
    }

    h4 {
      @include appText;
      @include colorizedSubtitle($qs-blue, 1rem);
      padding-left: 0.5rem;
      text-align: center;

      &:before {
        font-size: 0.9rem;
        font-family: element-icons !important;
        font-style: normal;
        line-height: 1;
        vertical-align: baseline;
        position: relative;
        left: -0.5rem;
        top: -0.05rem;
        content: '\e6dc';
        color: $qs-blue;
        transition: 0.3s ease-in all;
      }
    }

    p {
      font-size: 0.8rem !important;
      font-style: italic;
      letter-spacing: 1px;
      text-align: center;
      line-height: 1.3rem;
    }
  }
}
</style>

<style lang="scss">
#our-team {
  .slick-list {
    margin: 0 -0.7rem;
  }
  .slick-slide > div {
    padding: 0 0.7rem;
  }

  .crslDots {
    bottom: -4rem;
  }
}
</style>
