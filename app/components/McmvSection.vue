<template>
  <section v-if="pageData" id="mcmvSection" :class="button ? 'empPage' : ''">
    <div class="container_app">
      <el-row type="flex" align="middle">
        <el-col :xs="24" :sm="12">
          <h3>
            {{ pageData.metadata.find((item) => item.key === 'program').title }}
          </h3>
          <p>
            {{
              pageData.metadata.find((item) => item.key === 'program').content
            }}
          </p>

          <div class="items-doc">
            <div>
              <h5>Condições atrativas de financiamento</h5>
              <h5>Subsídio de até R$ 29.000,00</h5>
              <h5>Use seu FGTS</h5>
              <h5>Financiamento em até 30 anos</h5>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" class="nd">
          <img :src="require('@/assets/images/cvea.png')" alt="CVEA" />
          <template v-if="button">
            <nuxt-link
              class="btn-primary-red"
              :to="{ name: 'minha-casa-minha-vida' }"
            >
              Saiba Mais
            </nuxt-link>
          </template>
        </el-col>
      </el-row>
    </div>

    <div v-if="!button" class="sectionSeparator container_app st">
      <hr />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    button: {
      type: Boolean,
      default: false
    },
    pageData: {
      type: Object,
      default: (Object) => {}
    }
  }
}
</script>

<style lang="scss">
@media only screen and (max-width: 767px) {
  #mcmvSection {
    .el-row {
      flex-wrap: wrap;
      // padding: 2rem 0 4.5rem 0;
    }

    img {
      margin: 2.5rem auto 0.75rem auto !important;
      width: 14rem;
    }

    &.empPage {
      .nd {
        margin-top: 4rem;
      }

      img {
        margin: 0 auto 2.5rem auto !important;
      }
    }

    .items-doc {
      div {
        width: 100%;
      }
      h5 {
        font-size: 12px;
      }
    }
  }
}

#mcmvSection {
  padding: 4.5rem 0 0 0;

  .items-doc {
    margin-top: 2rem;
    div {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      margin: 0 -0.5rem;
    }
    h5 {
      margin: 0 0.5rem 1rem 0.5rem;
      display: flex;
      align-items: center;
      background-color: $flat-blue;
      border-radius: 1.875rem;
      padding: 0 2rem;
      height: 3rem;
      color: $white;
    }

    ul {
      margin: 2rem 0 !important;
    }
  }

  .sectionSeparator {
    display: flex;
    justify-content: center;
    hr {
      border-top: 1px solid rgba($color: $black-two, $alpha: 0.1);
      width: 100%;
      margin: 0 auto;
      margin-top: 4.5rem;
    }
  }

  img {
    display: block;
    margin-left: auto;
    margin-right: 5rem;
    max-width: 11rem;
  }
  h3 {
    @include appTitle(1.75rem);
    // white-space: pre-line;
  }
  p {
    @include appText;
  }

  &.empPage {
    padding: 4rem 0;
    background-color: rgba($color: #000000, $alpha: 0.05);
    h2 {
      @include appTitle(2rem);
      white-space: pre-line;
    }

    p {
      @include appText();
      line-height: 1.6rem;
      width: 85%;
    }

    a {
      width: 18.5rem;
    }

    img {
      max-width: 11rem;
      margin: 0 0 3rem 0;
    }
    .nd {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
