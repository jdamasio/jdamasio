<template>
  <section id="faleConoscoSec">
    <div class="container_app">
      <el-row type="flex" align="middle">
        <el-col :xs="24" :sm="12" class="st">
          <h3 class="hidden-sm-and-up">
            Fale Conosco
            <br />
            Agora Mesmo
          </h3>

          <img
            width="285"
            height="314"
            :src="require('@/assets/images/letter-icon.svg')"
            alt="Ícone de carta"
          />
        </el-col>

        <el-col :xs="24" :sm="12">
          <div class="content">
            <h3 class="hidden-sm-and-down">Fale Conosco Agora Mesmo</h3>
            <p>
              Quer falar sobre terrenos, trabalhar conosco, dúvidas ou quaisquer
              outras informações, manda uma mensagem pra gente.
            </p>
            <nuxt-link :to="{ name: 'fale-conosco' }" class="btn-primary-white">
              Enviar uma mensagem
            </nuxt-link>
          </div>
        </el-col>
      </el-row>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
#faleConoscoSec {
  background-color: $qs-blue;
  padding: 5.5rem 0;
  color: #fff;

  .el-col {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h3 {
    @include appTitle(2rem);
  }

  p {
    @include appText();
    font-size: 1.1rem;
  }

  .btn-primary-white {
    width: 63%;
    display: block;
    text-align: center;
    margin-top: 3rem;
    color: $qs-blue;
    font-size: 1.1rem;
    padding: 1.1rem;
    &:hover,
    &:active {
      border-color: $success-green;
      background-color: $success-green;
      color: #fff;
      &:after {
        right: -2.5rem;
        color: #fff;
      }
    }

    &:after {
      font-size: 1.5rem;
      font-family: element-icons !important;
      font-style: normal;
      line-height: 1;
      vertical-align: baseline;
      position: relative;
      right: -1rem;
      top: 0.188rem;
      content: '\e6dc';
      color: $qs-blue;
      transition: 0.3s ease-in all;
    }
  }

  img {
    max-width: 14rem;
    height: auto;
  }
}

@media only screen and (max-width: 767px) {
  #faleConoscoSec {
    padding: 4rem 0;
    .el-row {
      flex-wrap: wrap;
    }

    .st {
      display: flex;
      flex-direction: column;
      margin-bottom: 4rem;
    }

    img {
      max-width: 11rem !important;
    }

    .btn-primary-white {
      width: 100%;
    }
  }
}
</style>
