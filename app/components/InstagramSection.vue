<template>
  <section v-if="instagramData" id="instagramSec">
    <h2 class="container_app">Instagram CasaViva</h2>
    <el-row type="flex" align="center" justify="center">
      <el-col
        v-for="(item, index) in instagramData.metadata.slice(0, 3)"
        :key="index"
        :xs="12"
        :sm="8"
      >
        <div class="item">
          <img
            :src="item.content"
            alt="Imagem do instagram da Incorporadora CasaViva"
          />
        </div>
      </el-col>
    </el-row>

    <div class="wrapButton">
      <a
        href="https://www.instagram.com/minha_casa_viva/?hl=pt-br"
        target="_blank"
        class="btn-primary-red"
        rel="noopener noreferrer"
      >
        Siga nosso Instagram
      </a>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    instagramData: {
      type: Object,
      default: (Object) => {}
    }
  }
}
</script>

<style lang="scss" scoped>
#instagramSec {
  margin-bottom: 5.5rem;
  h2 {
    @include appTitle(2.5rem);
  }

  .item {
    align-self: center;
    justify-self: center;
    margin: 20px;
    box-shadow: 1px 1px 10px rgba(1, 1, 1, 0.1);
    img {
      @include img-fluid;
      display: block;
      min-width: 100%;
    }

    a {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  .wrapButton {
    margin-top: 3.85rem;
    text-align: center;
    a {
      padding: 1.1rem 2.25rem;
    }
  }
}

@media only screen and (max-width: 767px) {
  #instagramSec {
    h2 {
      @include appTitle(1.75rem);
    }

    .el-row {
      display: flex;
      flex-wrap: wrap;
      // justify-content: center;
    }

    .wrapButton a {
      padding: 1.1rem 3.75rem !important;
    }
  }
}
</style>
