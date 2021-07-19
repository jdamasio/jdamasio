<template>
  <header>
    <div id="topbar">
      <el-row type="flex" justify="center" align="middle">
        <el-col :xs="18" :sm="6">
          <div class="logo">
            <nuxt-link :to="{ name: 'index' }">
              <img
                width="282px"
                height="32px"
                :src="require('@/assets/images/logo.svg')"
              />
            </nuxt-link>
          </div>
        </el-col>

        <el-col :span="18" class="hidden-xs-only">
          <div class="header-menu">
            <ul>
              <li v-for="link in menu.links" :key="link.name">
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
              <li>
                <nuxt-link
                  class="menu-button"
                  :target="menu.cta_button.target"
                  :to="menu.cta_button.location"
                >
                  {{ menu.cta_button.name }}
                </nuxt-link>
              </li>
            </ul>
          </div>
        </el-col>

        <el-col :xs="3" :offset="3" class="hidden-sm-and-up ">
          <div class="toggleMobileWrapper" @click="toggleMenuMobile">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </el-col>
      </el-row>
    </div>
    <MenuMobile />
  </header>
</template>

<script>
import MenuMobile from '@/components/_MenuMobile'
export default {
  components: { MenuMobile },
  data() {
    return {
      menu: {
        links: [
          {
            name: 'Nossos produtos',
            location: '/nossos-produtos',
            target: '_self'
          },
          {
            name: 'Casa Verde e Amarela',
            location: '/minha-casa-minha-vida',
            target: '_self'
          },
          {
            name: 'Espaço Cliente',
            location: 'https://casaviva.freshdesk.com/support/login',
            target: '_blank'
          }
        ],
        cta_button: {
          name: 'Simule agora',
          location: '/simulador',
          target: '_self'
        }
      }
    }
  },
  methods: {
    toggleMenuMobile() {
      this.$bus.$emit('toggle-menu-mobile')
    }
    // hideMenuMobile() {
    //   this.$bus.$emit('close-menu-mobile')
    // }
  }
}
</script>

<style lang="scss" scoped>
$gutter: 2.5rem;

header {
  margin-bottom: 4.9rem;
}
#topbar {
  margin: 0;
  top: -0.1rem;
  padding: 0 $gutter;
  background-color: $white;
  box-shadow: 1px 2px 2px rgba(1, 1, 1, 0.1);
  position: fixed;
  z-index: 99;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;

  .el-row {
    width: 100%;
  }

  .logo {
    img {
      vertical-align: middle;
      max-width: 15rem;
    }
  }

  .header-menu {
    text-align: right;

    ul {
      // margin: $gutter / 4 0;
      padding: 0;
      margin: 0;
      li {
        vertical-align: middle;
        margin-right: 1.95rem;
        display: inline-block;

        &:last-child {
          margin-right: 0;
        }

        a {
          @include menu-item($warm-grey);
          transition: 0.3s ease-in;
          &:hover {
            color: $cherry;
          }
        }

        a.nuxt-link-exact-active {
          color: $cherry;
        }

        .menu-button {
          display: block;
          padding: 0.75rem 3.125rem;
          border-radius: 1.25rem;
          background-color: $white;
          font-size: 1rem;
          color: $cherry;
          position: relative;
          overflow: hidden !important;

          &:after {
            font-size: 1.15rem;
            font-family: element-icons !important;
            font-style: normal;
            line-height: 1;
            vertical-align: baseline;
            position: absolute;
            margin-top: 1px;
            right: 101%;
            content: '\e6dc';
            color: #fff;
            transition: right 0.4s;
            transform: rotateY(-180deg);
          }
          @include slide-hover-right($cherry, $white);
          &:hover:after {
            color: $white;
            right: 1.25rem;
            transform: rotateY(0);
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  #topbar {
    height: 5.6rem;
    padding: 0 1.75rem;

    .toggleMobileWrapper {
      padding-right: 5px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;

      div {
        height: 5px;
        width: 5px;
        border-radius: 50%;
        margin-bottom: 6px;
        background-color: $qs-blue;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
