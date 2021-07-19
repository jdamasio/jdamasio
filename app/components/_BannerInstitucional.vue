<template>
  <div>
    <picture>
      <source
        media="(max-width: 767px)"
        :srcset="require('@/assets/images/banner_home_mobile.jpg')"
      />
      <source :srcset="item.image" />
      <img :src="item.image" :alt="item.alt" class="img-fluid" />
    </picture>

    <div class="wrap-container">
      <div class="container_app">
        <div class="titleWrapper">
          <h1>
            {{ item.title }}
          </h1>
        </div>

        <div class="action">
          <!-- <img
            :src="require('@/assets/images/cs_white_logo.svg')"
            alt="Logo CasaViva"
            class="img-fluid"
          /> -->

          <nuxt-link :to="`${item.location}`" class="btn btn-primary-white">
            Saiba mais
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: (Object) => {}
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  max-width: 100%;
  display: block;
}

.container_app {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

h1 {
  margin: 0;
  padding: 0;
  color: $white;
  z-index: 2;
  font-weight: bold;
}

.titleWrapper {
  width: 50%;
  h1 {
    font-size: 4.7rem;
    line-height: 1.15;
  }
}

.action {
  h1 {
    font-size: 1.875rem;
  }

  img {
    display: block;
    margin: 0 auto 2.5rem auto;
    max-width: 17rem;
  }
}

a.btn {
  display: block;
  font-size: 1.25rem;
  padding: 1.25rem !important;
  text-align: center;
  width: 20rem;
}

@media only screen and (max-width: 1000px) {
  .titleWrapper {
    width: 60%;
  }
}

@media only screen and (max-width: 767px) {
  .titleWrapper {
    width: 100%;
    margin-top: 3rem;
    h1 {
      font-size: 3.4rem;
    }
  }

  .action {
    margin-bottom: 4rem;
  }
}
</style>
