<template>
  <section v-if="empsData.length > 0" class="destaquesSection">
    <div class="container_app">
      <h2>{{ sectionTitle }}</h2>
      <VueSlickCarousel v-if="empsData.length > 0" v-bind="slickOptions">
        <div v-for="item in empsData" :key="item.id" class="item">
          <BoxEmp :box-data="item" type-box="home" />
        </div>
      </VueSlickCarousel>
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import BoxEmp from '@/components/_BoxEmpreendimento'

export default {
  components: {
    BoxEmp,
    VueSlickCarousel
  },
  props: {
    sectionTitle: {
      default: '',
      type: String,
      required: true
    },
    empsData: {
      type: Array,
      default: (Array) => ['No items to show']
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
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.destaquesSection {
  padding-bottom: 4.8rem;
  overflow-x: hidden;

  h2 {
    @include appTitle(2.5rem);
  }

  .el-row {
    .el-col {
      margin-bottom: 1rem;
      &:nth-child(odd) {
        .item:before {
          background-color: rgba($color: $cherry, $alpha: 0.5);
        }
      }

      &:nth-child(even) {
        .item:before {
          background-color: rgba($color: $qs-blue, $alpha: 0.5);
        }
      }
    }
  }

  .item {
    overflow: hidden;
    position: relative;

    &:last-child {
      margin-bottom: 0;
    }

    &:before {
      content: '';
      z-index: 1;
      position: absolute;
      left: -90%;
      top: 0;
      height: 100%;
      width: 70%;
      mix-blend-mode: multiply;
      transform: skewX(-28deg);
      transition: 0.3s left ease-in-out;
    }

    &:hover,
    &:active {
      &:before {
        left: -22%;
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .destaquesSection {
    h2 {
      @include appTitle(1.75rem);
      margin-left: 1.75rem;
    }

    .container_app {
      padding: 0 !important;
    }

    .item {
      &:before {
        left: -105%;
        width: 80%;
      }

      &:hover,
      &:active {
        &:before {
          left: -25%;
        }
      }
    }
  }
}
</style>

<style lang="scss">
.destaquesSection {
  .slick-list {
    overflow-x: hidden;
    margin: 0 -0.7rem !important;
  }
  .slick-slide {
    &:nth-child(odd) {
      .item:before {
        background-color: rgba($color: $cherry, $alpha: 0.5);
      }
    }

    &:nth-child(even) {
      .item:before {
        background-color: rgba($color: $qs-blue, $alpha: 0.5);
      }
    }
  }
  .slick-slide > div {
    padding: 0 0.7rem;
  }
}

@media only screen and (max-width: 767px) {
  .destaquesSection {
    .slick-list {
      overflow-x: hidden;
      margin: 0;
    }

    .slick-slide > div {
      padding: 0;
    }
  }
}
</style>
