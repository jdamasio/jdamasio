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
          <!-- <h1>
            É para a Vida,
            <br />
            é para Sempre,
            <br />
            é pra você.
          </h1> -->
        </div>

        <div class="action">
          <ul>
            <li>
              <h1>{{ item.title }}</h1>
            </li>
            <li v-for="meta in item.metadata" :key="meta.icon_slug">
              <i :class="`cv-icons ${meta.icon_slug}`"></i>
              <span>
                {{ meta.value }}
              </span>
            </li>
          </ul>
          <nuxt-link
            :to="`/ficha/${item.location}`"
            class="btn btn-primary-white"
          >
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
  display: block;
  background-color: rgba($color: $flat-blue, $alpha: 0.75);
  padding: 2rem 3rem 2rem 3rem;
  border-radius: 1.25rem;
  z-index: 2;

  h1 {
    color: #fff;
    font-weight: bold;
    font-size: 1.875rem;
    margin-bottom: 0.5rem;
  }

  ul {
    padding: 0;
    margin: 0;
    li {
      list-style: none;
      @include text-paragraph(#fff);
      font-size: 1.25rem;
      letter-spacing: 0.1px;
      i {
        margin-right: 5px;
        &.cv-beds {
          margin-right: 5px + 10px;
        }
      }
    }
  }

  a {
    text-align: center;
    display: block;
    padding: 1.25rem !important;
    width: 85%;
    max-width: 18.75rem;
    margin: 2rem auto 0 auto;
    font-size: 1.25rem;
  }
}

@media only screen and (max-width: 767px) {
  .titleWrapper {
    width: 100%;
    margin-top: 3rem;
    h2 {
      font-size: 3.4rem;
    }
  }

  .action {
    margin-bottom: 3rem;
    padding: 2rem 2rem 2rem 2rem;
    width: 100%;

    h1 {
      font-size: 2rem;
    }
    ul {
      li {
        font-size: 1.4rem;
        i {
          font-size: 1.35rem;
        }
      }
    }
  }
}
</style>
