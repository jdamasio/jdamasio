<template>
  <div id="cookiesAlert" :class="!display ? 'hide' : 'show'">
    <el-row type="flex" justify="center" align="middle">
      <el-col :xs="24" :sm="18">
        <p>
          Usamos cookies para ajudar a personalizar conteúdo, adaptar e medir
          anúncios e oferecer uma experiência mais segura. Ao navegar no site,
          você concorda com o uso de cookies para coletar informações.
          <nuxt-link :to="{ name: 'politica-de-cookies' }">
            Leia nossa Política de cookies.
          </nuxt-link>
        </p>
      </el-col>

      <el-col :xs="24" :sm="6">
        <div class="wrapButtons">
          <a class="btn-primary-red" @click.prevent="closeAlert($event)">
            Eu aceito
          </a>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      display: false
    }
  },
  mounted() {
    if (this.$getCookie('acceptCookies') !== 'true') {
      setTimeout(() => {
        this.display = true
      }, 1000)
    }
  },
  methods: {
    closeAlert(event) {
      this.$setCookie('acceptCookies', true, 59)
      this.display = false
    }
  }
}
</script>

<style lang="scss">
@keyframes hideDialogAnimation {
  from {
    bottom: 2rem;
    opacity: 1;
  }
  50% {
    bottom: 4rem;
    opacity: 0.7;
  }
  60% {
    bottom: 1rem;
    opacity: 0.5;
  }
  to {
    bottom: -105%;
  }
}

@keyframes showDialogAnimation {
  from {
    bottom: -105%;
  }

  40% {
    bottom: 1rem;
    opacity: 0.75;
  }

  50% {
    bottom: 4rem;
    opacity: 0.9;
  }

  100% {
    bottom: 2rem;
    opacity: 1;
  }
}

#cookiesAlert {
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  width: 60%;
  max-width: 1800px;
  min-width: 700px;
  background-color: #fff;
  z-index: 99;
  position: fixed;
  bottom: -105%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 1.875rem;
  padding: 1.35rem 1.75rem;

  &.show {
    animation-name: showDialogAnimation;
    animation-duration: 0.6s;
    animation-fill-mode: forwards;
  }

  &.hide {
    animation-name: hideDialogAnimation;
    animation-duration: 0.6s;
    animation-fill-mode: forwards;
  }

  .wrapButtons {
    display: flex;
    justify-content: space-evenly;
    a {
      width: 40%;
      padding: 1.25rem 0;
      min-width: 12rem;
    }
    .btn-primary-white {
      font-size: 1.25rem; //rewrite font-size to match the same as 'primary-red' btn
      border: 2px solid $cherry;
    }

    .btn-primary-red {
      font-size: 1.1rem;
      padding: 1.1rem 0;
    }
  }

  p {
    @include appText;
    line-height: 1.8;
    font-size: 1rem;
  }
}

@media only screen and (max-width: 767px) {
  #cookiesAlert {
    padding: 1.55rem 1.75rem !important;
    min-width: unset;
    width: 90%;

    .el-row {
      flex-wrap: wrap;
    }
    .wrapButtons {
      flex-direction: column;
      margin-top: 2rem;
      align-items: center;
    }

    a {
      width: 100% !important;
    }

    .btn-primary-white {
      margin-top: 1rem;
    }
  }
}
</style>
