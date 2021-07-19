<template>
  <div v-if="boxData" class="boxEmpreendimento">
    <template v-if="boxData.category_slug == 'lancamentos'">
      <nuxt-link :to="'/ficha/' + boxData.key">
        <picture>
          <source
            media="(max-width: 767px)"
            :srcset="boxData.thumbnail_mobile"
          />
          <source :srcset="boxData.thumbnail_desk" />
          <img
            :src="boxData.thumbnail_desk"
            :alt="boxData.thumbnail_alt"
            class="img-fluid"
          />
        </picture>

        <div class="content">
          <h3>{{ boxData.title }}</h3>
          <ul>
            <li v-for="(item, index) in boxData.short_description" :key="index">
              <i :class="`cv-icons ${item.icon_slug}`"></i>
              <span>
                {{ item.value }}
              </span>
            </li>
          </ul>
        </div>
      </nuxt-link>
    </template>
    <template v-else>
      <nuxt-link :to="'/nossos-produtos/'">
        <picture>
          <source
            media="(max-width: 767px)"
            :srcset="boxData.thumbnail_mobile"
          />
          <source :srcset="boxData.thumbnail_desk" />
          <img
            :src="boxData.thumbnail_desk"
            :alt="boxData.thumbnail_alt"
            class="img-fluid"
          />
        </picture>

        <div class="content">
          <h3>{{ boxData.title }}</h3>
          <ul>
            <li v-for="(item, index) in boxData.short_description" :key="index">
              <i :class="`cv-icons ${item.icon_slug}`"></i>
              <span>
                {{ item.value }}
              </span>
            </li>
          </ul>
        </div>
      </nuxt-link>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    boxData: {
      type: Object,
      required: true,
      default: (Object) => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.boxEmpreendimento {
  * {
    color: #fff;
  }

  img {
    @include img-fluid;
    display: block;
    min-width: 100%;
  }

  a {
    position: relative;
    cursor: pointer;
    display: block;
    width: 100%;
    height: 100%;

    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 1;
      mix-blend-mode: multiply;
      background: rgb(255, 255, 255);
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 1) 30%,
        rgba(0, 0, 0, 1) 100%
      );
    }
  }

  h3 {
    @include appTitle(1rem);
  }

  .content {
    position: absolute;
    bottom: 3.5rem;
    left: 3.5rem;
    z-index: 3;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    li {
      display: flex;
      align-items: center;
      @include appText;
      margin-bottom: 0.4rem;
      word-break: break-all;
      padding-right: 2rem;

      &:last-child {
        margin-bottom: 0;
      }

      span {
        display: inline-block;
        margin-left: 0.7rem;
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .boxEmpreendimento {
    .content {
      left: 2.75rem;
      bottom: 4rem;
    }

    h3 {
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
