<template>
  <div id="page-empreendimentos">
    <Carousel :items="carousel_emps" />

    <DestaquesSection
      section-title="Lançamentos"
      :emps-data="
        destaques_section.filter(
          (item) =>
            item.category_slug === 'lancamentos' ||
            item.category_slug === 'futuro-lancamentos'
        )
      "
      type-destaque="pageEmps"
    />

    <!-- <DestaquesSection
      section-title="Futuros lançamentos"
      :emps-data="
        destaques_section.filter(
          (item) => item.category_slug === 'futuro-lancamentos'
        )
      "
      type-destaque="pageEmps"
    /> -->

    <Simulacao />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Carousel from '@/components/Carousel'
import DestaquesSection from '@/components/DestaquesSection'
import Simulacao from '@/components/Simulacao'

export default {
  components: {
    Carousel,
    DestaquesSection,
    Simulacao
  },
  async fetch({ store }) {
    try {
      if (store.getters['carousel/getShowcaseEmps'].length === 0)
        await store.dispatch('carousel/getCarouselAPI')

      if (store.getters['empreendimentos/getEmpreendimentos'].length === 0)
        await store.dispatch('empreendimentos/getEmpreendimentosAct')
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    }
  },

  computed: {
    ...mapGetters({
      carousel_emps: 'carousel/getShowcaseEmps',
      destaques_section: 'empreendimentos/getEmpreendimentos'
    })
  }
}
</script>
