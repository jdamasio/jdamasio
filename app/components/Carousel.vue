<template>
  <div id="section-carousel">
    <VueSlickCarousel
      v-if="items.length > 0"
      v-bind="slickOptions"
      :class="{ multiple: items.length > 1 }"
    >
      <div v-for="item in items" :key="item.id" class="item">
        <template v-if="item.type === 'empreendimento'">
          <BannerEmpreendimento :item="item" />
        </template>
        <template v-else>
          <BannerInstitucional :item="item" />
        </template>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import BannerEmpreendimento from '@/components/_BannerEmpreendimento'
import BannerInstitucional from '@/components/_BannerInstitucional'

export default {
  components: {
    VueSlickCarousel,
    BannerEmpreendimento,
    BannerInstitucional
  },
  props: {
    items: {
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
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  position: relative;
}
</style>

<style lang="scss">
#section-carousel {
  .slick-slider {
    margin-bottom: 2.4rem;
    &.multiple {
      margin-bottom: 4.8rem;
    }
  }
  .slick-list {
    margin: 0;
  }
  .slick-slide > div {
    padding: 0;
  }

  .crslDots {
    bottom: -3rem;
  }
}

@media only screen and (max-width: 767px) {
  .container_app {
    flex-direction: column;
  }
}
</style>
