<template>
  <div v-if="!removeFab">
    <div id="floatCta">
      <div class="wrapper">
        <nuxt-link
          class="hidden-sm-and-up btn-primary-red"
          :to="{ name: 'simulador' }"
        >
          Simule Agora
        </nuxt-link>

        <ul v-click-outside="hideList" class="initial" @click="menuShow = true">
          <li>
            <i class="cv-icons cv-chat-o"></i>
            <span>Atendimento</span>
          </li>
        </ul>

        <ul :class="menuShow ? 'menuFloat show' : 'menuFloat'">
          <li @click="showDialog">
            <i class="cv-icons cv-whatsapp"></i>
            <span>WhatsApp</span>
          </li>

          <li @click="showDialog">
            <i class="cv-icons cv-chat"></i>
            <span>Chat</span>
          </li>

          <li @click="showDialog">
            <i class="cv-icons cv-envelope"></i>
            <span>Mensagem</span>
          </li>
        </ul>
      </div>
    </div>

    <ModalFab />
  </div>
</template>

<script>
import ModalFab from '@/components/_ModalFab'
export default {
  components: {
    ModalFab
  },
  data() {
    return {
      menuShow: false,
      removeFab: true
    }
  },
  created() {
    this.$bus.$on('modal-fab-opened', () => {
      this.menuShow = false
    })
  },
  beforeMount() {
    window.addEventListener('scroll', this.checkToHide)
  },
  methods: {
    showDialog() {
      this.menuShow = false
      this.$bus.$emit('open-modal-fab')
    },
    hideList() {
      this.menuShow = false
    },
    checkToHide() {
      const where = document.getElementById('topbar').offsetTop + 100

      if (where >= window.scrollY) {
        this.removeFab = true
      } else {
        this.removeFab = false
      }
    }
  }
}
</script>

<style lang="scss">
#floatCta {
  position: fixed;
  z-index: 98;
  right: 1.5rem;
  bottom: 0;
  background-color: transparent;

  .wrapper {
    position: relative;
  }

  ul {
    padding: 0 1.9rem;
    margin: 0;
    li {
      font-size: 1.25rem;
      font-weight: bold;
      height: 5.5rem;
      display: flex;
      align-items: center;

      i {
        display: inline-block;
        font-size: 2.4rem;
        margin-right: 0.75rem;
      }
    }
  }

  .initial {
    opacity: 1;
    transition: opacity 0.4s;
    background-color: $cherry;
    z-index: 2;
    position: relative;

    &:hover,
    &:active {
      background-color: darken($color: $cherry, $amount: 20%);
    }
    li {
      color: #fff;
      cursor: pointer;
    }
  }

  .menuFloat {
    -webkit-box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.75);
    background-color: #fff;
    position: absolute;
    left: 0;
    bottom: -22rem;
    width: 100%;
    z-index: 3;
    transition: bottom 0.3s ease-in;
    padding-bottom: 0.5rem;

    &.show {
      bottom: 0;
    }

    li {
      border-bottom: 2px solid $warm-grey;
      color: $cherry;
      cursor: pointer;

      &:hover {
        color: lighten($color: $cherry, $amount: 25%);
      }

      &:last-child {
        border-bottom: none;
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  #floatCta {
    right: 1.75rem;
    bottom: 0.75rem;
    width: calc(100% - 3.5rem);

    .wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .btn-primary-red {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 4.75rem;
      font-size: 1.4rem;
      padding: 0 !important;
      transition: 0.35s all;
      width: calc(100% - 8rem);

      &:after {
        content: '\e6dc';
        font-size: 1.65rem;
        font-family: element-icons !important;
        font-style: normal;
        line-height: 1;
        vertical-align: baseline;
        position: relative;
        margin-top: 1px;
        right: -0.75rem;
        color: #fff;
        transition: 0.35s all;
      }

      &:hover,
      &:active {
        background-color: #fff;
        color: $cherry;
        &:after {
          color: $cherry;
        }
      }
    }

    .initial {
      display: inline-flex;
      background-color: $flat-blue !important;
      border-radius: 50%;
      padding: 0;
      height: 4.75rem;
      width: 4.75rem;
      align-items: center;
      justify-content: center;

      &:hover,
      &:active {
        background-color: darken($color: $flat-blue, $amount: 40%);
      }

      i {
        margin-right: 0 !important;
      }

      span {
        display: none;
      }
    }

    .menuFloat {
      bottom: -26rem;

      li {
        height: 7.5rem;
        font-size: 1.45rem;

        i {
          font-size: 2.85rem;
        }
      }
    }
  }
}
</style>
