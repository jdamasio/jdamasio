<template>
  <div>
    <transition name="slide-side">
      <div v-if="menuMobileShow" id="menuMobile">
        <div class="main">
          <div class="header" @click="menuMobileShow = false">
            <img :src="require('@/assets/images/logo.svg')" />
          </div>
          <ul @click="menuMobileShow = false">
            <li v-for="(link, index) in linksMobile" :key="index">
              <template v-if="link.target == '_self'">
                <nuxt-link :to="link.location">
                  {{ link.name }}
                </nuxt-link>
              </template>
              <template v-else>
                <a
                  :target="link.target"
                  :href="link.location"
                  rel="noopener noreferrer"
                >
                  {{ link.name }}
                </a>
              </template>
            </li>
          </ul>
        </div>
        <div class="close" @click="menuMobileShow = false">
          <div>
            ✕
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuMobileShow: false,
      linksMobile: [
        {
          name: 'Nossos produtos',
          location: '/nossos-produtos',
          target: '_self'
        },
        {
          name: 'Minha Casa Minha Vida',
          location: '/minha-casa-minha-vida',
          target: '_self'
        },
        {
          name: 'Sobre',
          location: '/sobre-casaviva',
          target: '_self'
        },
        {
          name: 'Espaço Cliente',
          location: 'https://casaviva.freshdesk.com/support/login',
          target: '_blank'
        },
        {
          name: 'Simule Agora',
          location: '/simulador',
          target: '_self'
        }
      ]
    }
  },
  created() {
    this.$bus.$on('toggle-menu-mobile', () => {
      this.menuMobileShow = true
    })
  }
}
</script>

<style lang="scss" scoped>
.slide-side-leave-active,
.slide-side-enter-active {
  transition: 0.4s;
}
.slide-side-enter {
  transform: translateX(-100%);
}
.slide-side-leave-to {
  transform: translateX(-100%);
}

#menuMobile {
  display: flex;
  min-height: 100vh;
  max-height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  img {
    filter: brightness(0) invert(1);
    max-width: 17.5rem;
  }

  .main {
    min-height: 100vh;
    height: 100%;
    width: 85%;
    background-color: $flat-blue;
    padding: 0 1rem 1rem 1.75rem;

    .header {
      height: 5.6rem;
      display: flex;
      align-items: center;
    }

    ul {
      padding: 0;
      margin: 1.5rem 0 0 0;
      list-style: none;
    }

    li {
      a {
        color: #fff;
        text-decoration: none;
        transition: all 0.3s;
        display: block;
        position: relative;
        font-weight: bold;
        font-size: 1.4rem;
        margin-bottom: 1rem;
        padding: 1rem 0;

        &:before {
          font-size: 1.1rem;
          font-family: element-icons !important;
          font-style: normal;
          line-height: 1;
          position: absolute;
          //   top: 50%;
          //   transform: translateY(-50%);
          right: 0;
          content: '\e6dc';
          color: #fff;
          transition: 0.3s;
          font-weight: bold;
        }

        &:hover,
        &:active {
          &:before {
            color: darken($color: #fff, $amount: 30%);
          }
        }
      }

      &:last-child {
        a {
          margin-bottom: 0;
        }
      }
    }
  }

  .close {
    background-color: #fff;
    min-height: 100vh;
    height: 100%;
    width: 15%;
    text-align: center;

    div {
      height: 4.8rem;
      display: flex;
      align-items: center;
      font-size: 3rem;
      justify-content: center;
      color: $flat-blue;

      &:hover,
      &:active {
        color: darken($color: $flat-blue, $amount: 30%);
      }
    }
  }
}
</style>
