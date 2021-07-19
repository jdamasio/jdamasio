<template>
  <div v-if="pageData" id="page-termos-e-condicoes">
    <div class="container_app">
      <h1>
        {{ pageData.metadata.find((item) => item.key === 'title').title }}
      </h1>

      <div v-for="(item, index) in pageData.items" :key="index" class="item">
        <p>{{ item.title }}</p>
        <ul>
          <li>{{ item.content }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async fetch({ store }) {
    try {
      if (store.getters['termos/getTermsData'] === null)
        await store.dispatch('termos/getPageData')
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    }
  },
  computed: {
    ...mapGetters({
      pageData: 'termos/getTermsData'
    })
  }
}
</script>

<style lang="scss" scoped>
#page-termos-e-condicoes {
  padding: 3rem 0 2rem 0;

  h1 {
    @include appTitle(3rem);
  }

  .item {
    margin-bottom: 3rem;

    p {
      @include appText;
      @include colorizedSubtitle($qs-blue, 1rem);
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

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
