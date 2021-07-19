<template>
  <div
    v-if="empData"
    :id="`page-ficha-${this.$route.params.slug}`"
    class="ficha-empreendimento"
  >
    <div id="galery" class="hidden-xs-only">
      <div class="vertical">
        <img
          :src="
            empData.media.find(
              (item) => item.preview && item.type === 'vertical'
            ).src
          "
          :alt="
            empData.media.find(
              (item) => item.preview && item.type === 'vertical'
            ).alt
          "
          @click="
            openGallery(
              empData.media.findIndex(
                (item) => item.preview && item.type === 'vertical'
              )
            )
          "
        />
      </div>
      <div class="horizontal">
        <img
          v-for="(item, index) in empData.media
            .filter((x) => x.type == 'horizontal' && x.preview)
            .slice(0, 2)"
          :key="index"
          :src="item.src"
          :alt="item.alt"
          @click="openGallery(empData.media.findIndex((elX) => elX === item))"
        />
      </div>

      <div class="wrapButton">
        <a class="btn btn-primary-white" @click.prevent="openGallery(0)">
          Ver Todas Fotos
        </a>
      </div>
    </div>

    <div id="galeryMobile" class="hidden-sm-and-up">
      <VueSlickCarousel v-bind="slickOptionsGalery">
        <div
          v-for="(item, index) in empData.media.filter((item) => item.preview)"
          :key="index"
        >
          <div class="item">
            <img
              :src="item.src"
              :alt="item.alt"
              class="img-fluid"
              @click="
                openGallery(empData.media.findIndex((elX) => elX === item))
              "
            />
          </div>
        </div>
      </VueSlickCarousel>
      <div class="wrapButton">
        <a class="btn btn-primary-white" @click.prevent="openGallery(0)">
          Ver Todas Fotos
        </a>
      </div>
    </div>

    <section id="descriptionSection">
      <div class="container_app">
        <h1>{{ empData.description.name }}</h1>
        <el-row
          type="flex"
          align="middle"
          justify="center"
          :gutter="20"
          class="st"
        >
          <el-col :xd="24" :sm="12">
            <p
              :inner-html.prop="empData.description.text | formatBreakLine"
            ></p>
          </el-col>
          <el-col :xd="24" :sm="12">
            <img
              :src="empData.description.image"
              :alt="empData.description.alt"
            />
          </el-col>
        </el-row>

        <el-row :gutter="10" type="flex" class="nd">
          <el-col
            v-for="(item, index) in empData.description.specs"
            :key="index"
            :xs="12"
            :sm="5"
          >
            <div class="item">
              <i :class="`specs-icon ${item.icon_slug}`"></i>
              <div>
                <h6>{{ item.title }}</h6>
                <h4>{{ item.value }}</h4>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </section>

    <div class="sectionSeparator container_app st">
      <hr />
    </div>

    <section v-if="empData.tour" id="tourSection">
      <div class="wrapper">
        <div class="container_app">
          <iframe :src="tourSource" frameborder="0"></iframe>

          <div v-if="tourOver" id="overlay-tour">
            <img
              :src="empData.tour.placeholder"
              alt="Foto de decorado"
              class="tourOverImg"
            />
            <div class="content">
              <h3>Tour virtual</h3>
              <p>
                Faça o tour deste empreendimento e confira todos os detalhes.
              </p>
              <img
                :src="require('@/assets/images/tour_icon.png')"
                alt="Tour icon"
              />
              <a class="btn-primary-white" @click.prevent="loadTour($event)">
                Começar
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="container_app">
        <VueSlickCarousel
          v-if="empData.media.filter((x) => x.decorado).length > 0"
          v-bind="slickOptions"
        >
          <div
            v-for="(item, index) in empData.media.filter(
              (item) => item.decorado
            )"
            :key="index"
          >
            <div class="item">
              <img :src="item.src" :alt="item.alt" class="img-fluid" />
              <p>
                {{ item.caption }}
              </p>
            </div>
          </div>
        </VueSlickCarousel>
      </div>
    </section>

    <div class="sectionSeparator container_app nd">
      <hr />
    </div>

    <section id="caracteristics">
      <div class="container_app">
        <el-row>
          <el-col :xs="24" :sm="4">
            <h3>
              <!-- É para a vida,
              <br />
              é para sempre,
              <br />
              é para você. -->
              <small>
                Diferenciais feitos com carinho para você.
              </small>
            </h3>
          </el-col>

          <el-col :xs="24" :sm="19" :offset="1" class="list">
            <el-row :gutter="10">
              <el-col
                v-for="(item, index) in empData.features"
                :key="index"
                :xs="12"
                :sm="6"
                class="item"
              >
                <table>
                  <tbody>
                    <tr>
                      <td><i :class="`cv-iconx ${item.icon_slug}`"></i></td>
                      <td>
                        <h4>{{ item.title }}</h4>
                        <p>{{ item.content }}</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
    </section>

    <div class="sectionSeparator container_app rd">
      <hr />
    </div>

    <section id="plantas">
      <div class="container_app">
        <h2>Tipos de Planta</h2>

        <VueSlickCarousel v-bind="slickOptions">
          <div
            v-for="(item, index) in empData.blueprints"
            :key="index"
            class="item"
          >
            <img :src="item.content" :alt="item.alt" />
            <p>
              {{ item.title }}
            </p>
          </div>
        </VueSlickCarousel>
      </div>
    </section>

    <div class="sectionSeparator container_app th1">
      <hr />
    </div>

    <section id="location">
      <div class="container_app">
        <h2>Localização</h2>

        <el-row :gutter="30">
          <el-col :xs="24" :sm="12">
            <p>{{ empData.map.extra_content }}</p>
          </el-col>

          <el-col :xs="24" :sm="12">
            <VueSlickCarousel
              v-if="empData.media.filter((x) => x.localizacao).length > 0"
              v-bind="slickOptions"
            >
              <div
                v-for="(item, index) in empData.media.filter(
                  (item) => item.localizacao
                )"
                :key="index"
              >
                <div class="item">
                  <img :src="item.src" :alt="item.alt" class="img-fluid" />

                  <p>
                    {{ item.caption }}
                  </p>
                </div>
              </div>
            </VueSlickCarousel>
          </el-col>
        </el-row>
      </div>
    </section>

    <div class="sectionSeparator container_app th2">
      <hr />
    </div>

    <section id="addressSection">
      <div class="container_app">
        <h2>Endereço</h2>

        <el-row :gutter="30" type="flex" align="middle">
          <el-col :xs="24" :sm="12">
            <div
              v-for="(item, index) in empData.addresses"
              :key="index"
              class="item"
            >
              <h4>{{ item.title }}</h4>
              <ul>
                <li>{{ item.content }}</li>
              </ul>
            </div>

            <!-- <el-row class="row">

            </el-row> -->
          </el-col>
          <el-col :xs="24" :sm="12">
            <iframe :src="empData.map.content"></iframe>
          </el-col>
        </el-row>
      </div>
    </section>
    <!-- <div class="sectionSeparator container_app th3">
      <hr />
    </div> -->

    <!-- Deixar comentado por ora propositalmente -->
    <!-- <section v-if="datasheet.list.length > 0" id="datasheetSection">
      <div class="container_app">
        <h2>Ficha Técnica</h2>
        <el-row :gutter="13">
          <el-col
            v-for="(item, index) in datasheet.list"
            :key="index"
            :xs="24"
            :sm="4"
            class="item"
          >
            <h4>{{ item.title }}</h4>
            <ul>
              <li>{{ item.content }}</li>
            </ul>
          </el-col>
        </el-row>
      </div>
    </section> -->

    <McmvSection :button="true" :page-data="mcmvData" />

    <Simulacao />

    <client-only>
      <LightBox
        v-if="empData.media"
        ref="lightbox"
        :media="empData.media"
        :show-light-box="lightbox.showLightBox"
        :show-caption="lightbox.showCaption"
        class="empLightbox"
      ></LightBox>
    </client-only>
  </div>
</template>

<script>
// import axios from 'axios'
import { mapGetters } from 'vuex'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import 'vue-image-lightbox/dist/vue-image-lightbox.min.css'
import Simulacao from '@/components/Simulacao'
import McmvSection from '@/components/McmvSection'

export default {
  components: {
    VueSlickCarousel,
    Simulacao,
    McmvSection
  },
  async fetch({ store, route }) {
    try {
      await store.dispatch('empreendimento/getEmpData', {
        slug: route.params.slug
      })
      if (store.getters['mcmv/getMcmvData'] === null)
        await store.dispatch('mcmv/getPageData')
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    }
  },
  data() {
    return {
      tourOver: true,
      tourSource: '',
      slickOptions: {
        arrows: true,
        dots: true,
        dotsClass: 'slick-dots crslDots',
        edgeFriction: 0.35,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      },
      slickOptionsGalery: {
        arrows: false,
        dots: true,
        dotsClass: 'slick-dots crslDots',
        edgeFriction: 0.35,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      },
      lightbox: {
        showLightBox: false,
        showCaption: true,
        media: []
      },
      dummyData: {
        // localizacao, decorado
        media: [
          {
            thumb: '/carousels/decorado/decorado-1.jpg',
            src: '/carousels/decorado/decorado-1.jpg',
            caption: 'Foto decorado 1',
            alt: 'Foto decorado 1',
            preview: false,
            type: 'vertical',
            decorado: true
          },
          {
            thumb: '/carousels/decorado/decorado-2.jpg',
            src: '/carousels/decorado/decorado-2.jpg',
            caption: 'Foto decorado 2',
            alt: 'Foto decorado 2',
            preview: false,
            type: 'vertical',
            decorado: true
          },
          {
            thumb: '/carousels/decorado/decorado-3.jpg',
            src: '/carousels/decorado/decorado-3.jpg',
            caption: 'Foto decorado 3',
            alt: 'Foto decorado 3',
            preview: false,
            type: 'vertical',
            decorado: true
          },
          {
            thumb: '/carousels/decorado/decorado-4.jpg',
            src: '/carousels/decorado/decorado-4.jpg',
            caption: 'Foto decorado 4',
            alt: 'Foto decorado 4',
            preview: false,
            type: 'vertical',
            decorado: true
          },
          {
            thumb: '/carousels/decorado/decorado-5.jpg',
            src: '/carousels/decorado/decorado-5.jpg',
            caption: 'Foto decorado 5',
            alt: 'Foto decorado 5',
            preview: false,
            type: 'vertical',
            decorado: true
          },
          {
            thumb: '/carousels/localizacao/foto-aerea.jpg',
            src: '/carousels/localizacao/foto-aerea.jpg',
            caption: 'Foto aérea do local',
            alt: 'Foto aérea do local',
            preview: false,
            type: 'vertical',
            localizacao: true
          },
          {
            thumb: '/carousels/localizacao/localizacao-1.jpg',
            src: '/carousels/localizacao/localizacao-1.jpg',
            caption: 'Hospital Le Forte',
            alt: 'Hospital Le Forte',
            preview: false,
            type: 'vertical',
            localizacao: true
          },
          {
            thumb: '/carousels/localizacao/localizacao-2.jpg',
            src: '/carousels/localizacao/localizacao-2.jpg',
            caption: 'Agência Bancária',
            alt: 'Agência Bancária',
            preview: false,
            type: 'vertical',
            localizacao: true
          },
          {
            thumb: '/carousels/localizacao/localizacao-3.jpg',
            src: '/carousels/localizacao/localizacao-3.jpg',
            caption: 'Escola',
            alt: 'Escola',
            preview: false,
            type: 'vertical',
            localizacao: true
          },
          {
            thumb: '/carousels/localizacao/localizacao-4.jpg',
            src: '/carousels/localizacao/localizacao-4.jpg',
            caption: 'Agência Bancária',
            alt: 'Agência Bancária',
            preview: false,
            type: 'vertical',
            localizacao: true
          },
          {
            thumb: '/carousels/localizacao/localizacao-5.jpg',
            src: '/carousels/localizacao/localizacao-5.jpg',
            caption: 'Supermercado',
            alt: 'Supermercado',
            preview: false,
            type: 'vertical',
            localizacao: true
          },
          {
            thumb: '/carousels/localizacao/localizacao-6.jpg',
            src: '/carousels/localizacao/localizacao-6.jpg',
            caption: 'Shopping',
            alt: 'Shopping',
            preview: false,
            type: 'vertical',
            localizacao: true
          }
        ]
      }
      // structuredData: {
      //   '@context': 'http://schema.org',
      //   '@type': 'House'
      //   // More structured data...
      // }
    }
  },
  computed: {
    ...mapGetters({
      empData: 'empreendimento/getEmpData',
      mcmvData: 'mcmv/getMcmvData'
    })
  },
  methods: {
    openGallery(index) {
      this.$refs.lightbox.showImage(index)
    },
    loadTour(event) {
      this.tourOver = false
      this.tourSource = this.empData.tour.content
    }
  },
  head() {
    // eslint-disable-next-line no-console
    // console.log(this.empData)
    return {
      script: [
        {
          type: 'application/ld+json',
          json: {
            '@context': 'http://schema.org',
            '@type': 'Product',
            name: this.empData.description.name,
            image: this.empData.description.image,
            brand: 'CasaViva',
            description: this.empData.description.text,
            category: 'Apartment'
          }
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.localization_text {
  margin-top: 1.2rem;
  margin-bottom: 1.8rem;
}

.fotos_decorado {
  margin-top: 60px;
}

.ficha-empreendimento {
  .sectionSeparator {
    display: flex;
    justify-content: center;
    hr {
      border-top: 1px solid rgba($color: $black-two, $alpha: 0.1);
      width: 100%;
      margin: 0 auto;
    }
    // st, nd, rd, th1, th2, th3

    &.st {
      padding-top: 3.5rem;
      padding-bottom: 4rem;
    }

    &.nd {
      padding-top: 4rem;
      padding-bottom: 3rem;
    }

    &.rd {
      padding-top: 1rem;
      padding-bottom: 4.5rem;
    }

    &.th1 {
      padding-top: 5.5rem;
      padding-bottom: 3rem;
    }

    &.th2 {
      padding-top: 3rem;
      padding-bottom: 3rem;
    }

    &.th3 {
      padding-bottom: 3rem;
      padding-top: 0.5rem;
    }
  }

  #galery {
    display: flex;
    position: relative;

    .vertical,
    .horizontal {
      flex: 1;
    }

    .horizontal {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .vertical {
      img {
        min-height: 100%;
      }
    }

    img {
      @include img-fluid();
      min-width: 100%;
      display: block;
      cursor: pointer;
    }

    .wrapButton {
      position: absolute;
      bottom: 1.9rem;
      display: flex;
      left: 50%;
      transform: translateX(-50%);

      a {
        width: 36.5rem;
        text-align: center;
      }
    }
  }

  #descriptionSection {
    .container_app {
      padding-top: 2.5rem;
    }
    h1 {
      @include appTitle(1.25rem);
    }

    p {
      @include appText();
      line-height: 1.6rem;
      width: 90%;
    }

    img {
      display: block;
      margin: 0 auto;
      max-width: 35%;
    }

    .st {
      margin-bottom: 4rem;
    }

    .nd {
      flex-wrap: wrap;

      .el-col {
        margin-bottom: 1.5rem;
        &:last-child {
          margin-bottom: 0;
        }

        &:first-child {
          margin-bottom: 1.5rem;
        }
      }

      .el-col {
        width: 20%;
      }
    }

    .item {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      border: 1px solid rgba($color: $warm-grey, $alpha: 0.5);
      border-radius: 1.875rem;
      height: 6rem;
      transition: all 0.4s;

      // &:hover {
      //   -webkit-box-shadow: inset 0px 0px 2px 2px rgba(112, 112, 112, 0.5);
      //   -moz-box-shadow: inset 0px 0px 2px 2px rgba(112, 112, 112, 0.5);
      //   box-shadow: inset 0px 0px 2px 2px rgba(112, 112, 112, 0.5);
      // }

      i {
        color: $cherry;
        font-size: 2.3rem;

        &.cv-beds {
          font-size: 1.75rem;
        }
      }

      h4,
      h6 {
        color: $qs-blue;
      }

      h6 {
        font-size: 0.95rem;
      }

      h4 {
        font-size: 2.25rem;
        line-height: 1.2;
      }
    }
  }

  #tourSection {
    padding: 0 2.5rem 0 2.5rem;

    h2 {
      @include appTitle(3rem);
      // padding-left: 0.2rem;
    }

    img,
    iframe {
      display: block;
      width: 100%;
      border: 0;
    }

    iframe {
      min-height: 50vh;
      height: 40rem;
      max-height: 85vh;
    }

    img {
      @include img-fluid();
      min-width: 100%;
    }

    .wrapper {
      .container_app {
        position: relative;
      }
    }

    #overlay-tour {
      color: #fff;
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      background-color: rgba($color: $flat-blue, $alpha: 0.85);
      display: flex;
      align-items: center;
      justify-content: center;

      .tourOverImg {
        position: absolute;
        min-width: 100%;
        max-width: 100%;
        min-height: 50vh;
        height: 40rem;
        max-height: 85vh;
        z-index: -1;
        border-radius: 4px;
      }

      .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 1rem;
        text-align: center;
        img {
          min-width: unset;
          width: 5.5rem;
          margin-bottom: 2rem;
        }
      }

      h3 {
        font-size: 4rem;
        margin-bottom: 1rem;
      }

      p {
        @include appText;
        margin-bottom: 1.5rem;
      }

      a {
        color: $qs-blue;
        font-size: 1.25rem;

        &:hover,
        &:active {
          border-color: $success-green;
          background-color: $success-green;
          color: #fff;
        }
      }
    }

    .slick-slider {
      margin: 3.5rem 0 3rem 0;

      .item img {
        margin: 0 auto;
      }
    }
  }

  #caracteristics {
    .el-row {
      h3 {
        // @include appTitle(0);
        font-size: 1.65rem;
        margin-bottom: 0;
        small {
          display: block;
          font-weight: 400;
          font-size: 1.2rem;
          margin-top: 1.8rem;
          line-height: 1;
        }
      }

      h4 {
        @include appText;
        @include colorizedSubtitle($qs-blue, 0.4rem);
        margin-top: 0.3rem;
      }

      i {
        color: $cherry;
        font-size: 1.65rem;
        position: relative;
        top: 0.125rem;
      }

      table td {
        vertical-align: top;
        min-width: 2.5rem;

        h4,
        p {
          word-wrap: break-all;
        }
      }

      p {
        @include appText;
      }
    }

    .el-col {
      margin-bottom: 2.5rem;
      &:last-child {
        margin-bottom: 0;
      }
      &:first-child {
        margin-bottom: 2.5rem;
      }
    }
  }

  #plantas {
    padding: 0 2.5rem 0 2.5rem;

    img {
      @include img-fluid;
      min-width: 100%;
      display: block;
    }
    h2 {
      @include appTitle(3rem);
    }

    p {
      @include appText();
      font-weight: bold;
      text-align: center;
      margin-top: 1.5rem;
      color: $qs-blue;
    }
  }

  #location {
    h2 {
      @include appTitle(1rem);
    }

    .slick-slider {
      margin: 0 0 3rem 0;

      .item img {
        margin: 0 auto;
      }
    }

    p {
      @include appText();
    }
  }

  #addressSection,
  #datasheetSection {
    margin-bottom: 4rem;

    iframe {
      display: block;
      width: 100%;
      height: 25rem;
      max-height: 80vh;
      border: 0;
    }

    .item {
      margin-bottom: 2.5rem;

      &:last-child {
        margin-bottom: 0;
      }

      // &:first-child {
      //   margin-bottom: 2.5rem;
      // }
    }

    h2 {
      @include appTitle(1rem);
    }

    h4 {
      @include appText;
      @include colorizedSubtitle($qs-blue, 0.5rem);
    }

    ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    li {
      @include appText;
      position: relative;
      text-indent: 0.5rem;
      line-height: 1.48;

      &:before {
        font-size: 0.8rem;
        font-family: element-icons !important;
        font-style: normal;
        line-height: 1;
        vertical-align: baseline;
        position: relative;
        left: -0.5rem;
        top: -0.08rem;
        content: '\e6dc';
        color: $black_two;
        transition: 0.3s ease-in all;
        font-weight: bold;
      }
    }
  }

  #datasheetSection {
    border-bottom: none;
    .container_app {
      padding-bottom: 4rem;
    }
  }
}

@media only screen and (min-width: 1280px) {
  .ficha-empreendimento {
    #galery {
      height: 70vh;
      overflow: hidden;
    }

    .horizontal {
      div {
        &:first-child {
          img {
            margin-top: -13vh;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .ficha-empreendimento {
    .sectionSeparator {
      &.st {
        padding-top: 4.5rem;
      }
      &.nd {
        padding-top: 3.5rem;
        padding-bottom: 3.5rem;
      }
      &.rd {
        padding-bottom: 3.5rem;
        padding-top: 2rem;
      }
      &.th1 {
        padding-top: 6rem;
        padding-bottom: 3.5rem;
      }

      &.th2 {
        padding-bottom: 3.5rem;
      }
    }

    #tourSection {
      padding: 0 !important;
      h2 {
        margin-bottom: 2rem !important;
      }

      .container_app {
        padding: 0 !important;
      }

      #overlay-tour {
        .tourOverImg {
          min-height: unset;
          height: 25rem;
        }

        h3 {
          font-size: 2.5rem;
        }

        p {
          font-size: 1.1rem;
        }

        .content img {
          width: 3.5rem;
        }
      }
      iframe {
        min-height: unset;
        height: 25rem;
      }
    }
  }

  #galeryMobile {
    position: relative;
    margin-bottom: 3.5rem;
    .item {
      display: flex;
      align-items: center;
      img {
        min-width: 100%;
        position: relative;
      }
    }

    a {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      width: 90%;
      border: 1px solid $cherry;
    }
  }

  #descriptionSection {
    .st {
      flex-wrap: wrap;
    }

    p {
      width: 100% !important;
    }
    img {
      max-width: 14rem !important;
      margin: 3rem auto 0 auto !important;
    }

    .nd {
      .el-col-xs-12 {
        width: 50% !important;
      }
    }
  }

  #addressSection {
    padding-bottom: 0;

    .el-row {
      flex-direction: column;
      margin: 0 !important;
    }

    .item,
    h2 {
      margin-left: 1.75rem;
      margin-right: 1.75rem;
    }

    .el-col {
      padding: 0 !important;
    }

    .container_app {
      padding: 0 !important;
    }

    h2 {
      margin-bottom: 2rem;
    }

    iframe {
      margin-top: 3.5rem;
    }
  }

  #location {
    .container_app {
      padding: 0 !important;
    }
    h2 {
      padding-left: 1.75rem;
      margin-bottom: 2rem;
    }

    p {
      padding: 0 1.75rem 0 1.75rem;
    }

    .el-row {
      flex-direction: column;
      margin: 0 !important;
    }

    .el-col {
      padding: 0 !important;
    }
  }

  #caracteristics {
    .list {
      margin-left: 0 !important;
    }

    table {
      td {
        display: block;

        i {
          font-size: 2.6rem !important;
        }
      }
    }
  }

  #plantas {
    padding: 0 !important;
    h2 {
      padding: 0 1.75rem 0 1.75rem !important;
    }

    .container_app {
      padding: 0 !important;
    }
  }
}
</style>

<style lang="scss">
@media only screen and (max-width: 767px) {
  #plantas,
  #tourSection,
  #location {
    .slick-next {
      right: 1.25rem !important;
    }

    .slick-prev {
      left: 1.25rem !important;
    }
    .slick-list {
      margin-top: 1.85rem;
    }
  }
  .ficha-empreendimento {
    .slick-list {
      width: 100% !important;
    }

    .crslDots {
      bottom: -2.5rem !important;
    }

    #location {
      .slick-list {
        margin-top: 3rem;
      }

      .item {
        p {
          margin-top: 1rem;
        }
      }
    }
  }
}

.ficha-empreendimento {
  .slick-list {
    margin: 0 auto;
  }

  #location {
    .slick-list {
      width: 95%;
    }

    .slick-next {
      right: 1.5rem;
    }

    .slick-prev {
      left: 1.5rem;
    }
  }
}

#plantas,
#tourSection,
#location {
  .crslDots {
    bottom: -2rem;
  }

  .item p {
    @include appText();
    font-weight: bold;
    text-align: center;
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
    color: $qs-blue;
  }

  .slick-next,
  .slick-prev {
    z-index: 3;
    &:before {
      color: #000;
      line-height: 0;
      font-size: 2.5rem;
    }
  }

  img {
    border-radius: 20px;
  }

  .slick-list {
    width: 90%;
  }

  .slick-next {
    right: 3.5rem;
  }

  .slick-prev {
    left: 3.5rem;
  }
}
#galeryMobile {
  .slick-track {
    display: flex;
    align-items: center;
  }
}
.empLightbox {
  .vue-lb-info {
    @include montserrat();
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
  }
}
</style>
