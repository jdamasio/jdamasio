<template>
  <div v-if="pageData" id="page-mcmv">
    <section id="bannermcmv">
      <picture>
        <source
          media="(max-width: 767px)"
          :srcset="require('@/assets/images/banner_mcmv_mobile.jpg')"
        />
        <source :srcset="pageData.banner_url" />
        <img
          :src="pageData.banner_url"
          :alt="pageData.banner_alt"
          class="img-fluid"
        />
      </picture>

      <div class="wrap-container">
        <div class="container_app">
          <div class="content">
            <h1>{{ pageData.banner_title }}</h1>
          </div>
        </div>
      </div>
    </section>

    <section id="infosmcmv">
      <McmvSection :page-data="pageData" />

      <div class="container_app">
        <el-row id="questionsMcmv" :gutter="30">
          <el-col :span="24">
            <h3>Dúvidas Frequentes</h3>
          </el-col>

          <el-col
            v-for="(question, index) in pageData.faq"
            :key="index"
            :xs="24"
            class="item"
          >
            <h4>{{ question.question }}</h4>
            <ul>
              <li :inner-html.prop="question.answer | formatBreakLine"></li>
            </ul>
          </el-col>
        </el-row>
      </div>

      <div class="container_app">
        <el-row id="documentacaoMcmv" :gutter="30">
          <el-col :span="24">
            <h3>Documentação</h3>
          </el-col>

          <el-col
            v-for="(question, index) in pageData.docs"
            :key="index"
            :xs="24"
            class="item"
          >
            <h4>{{ question.question }}</h4>
            <ul>
              <li :inner-html.prop="question.answer | formatBreakLine"></li>
            </ul>
          </el-col>
          <el-col :xs="24" class="items-doc">
            <div>
              <h5>RG ou CNH</h5>
              <h5>CPF</h5>
              <h5>Imposto de renda</h5>
              <h5>Documento de estado civil</h5>
              <h5>Comprovante de endereço</h5>
              <h5>Carteira de trabalho</h5>
              <h5>Extrato do FGTS</h5>
            </div>
          </el-col>

          <el-col :xs="24" class="items-doc">
            <ul>
              <li>
                Sou CLT ou funcionário público:
              </li>
            </ul>

            <div>
              <h5>2 últimos holerites</h5>
            </div>
          </el-col>

          <el-col :xs="24" class="items-doc">
            <ul>
              <li>
                Sou autônomo:
              </li>
            </ul>

            <div>
              <h5>Extrato bancário dos últimos 6 meses</h5>
            </div>
          </el-col>

          <el-col :xs="24">
            <h3 class="spaced">
              Como faço para comprar meu imóvel no Programa Casa Verde e
              Amarela?
            </h3>
          </el-col>

          <!-- <el-col :xs="24">
            <ul class="stepByStep">
              <li class="right">
                <div class="status">
                  <div class="pic">
                    <img src="@/assets/images/passo-1.png" alt="Passo 1" />
                  </div>
                  <div class="info">
                    <h5>
                      Preencha sua ficha cadastral com um de nosso consultores
                    </h5>
                  </div>
                </div>
              </li>
              <li class="left">
                <div class="status">
                  <div class="pic">
                    <img src="@/assets/images/passo-2.png" alt="Passo 2" />
                  </div>
                  <div class="info">
                    <h5>
                      Verifique a documentação necessária para realizar análise
                      de crédito
                    </h5>
                  </div>
                </div>
              </li>
              <li class="right">
                <div class="status">
                  <div class="pic">
                    <img src="@/assets/images/passo-3.png" alt="Passo 3" />
                  </div>
                  <div class="info">
                    <h5>
                      Análise crédito será efetuada
                    </h5>
                  </div>
                </div>
              </li>
              <li class="left">
                <div class="status">
                  <div class="pic">
                    <img src="@/assets/images/passo-4.png" alt="Passo 4" />
                  </div>
                  <div class="info">
                    <h5>
                      Verifique o valor de financiamento aprovado
                    </h5>
                  </div>
                </div>
              </li>
              <li class="right">
                <div class="status">
                  <div class="pic">
                    <img src="@/assets/images/passo-5.png" alt="Passo 5" />
                  </div>
                  <div class="info">
                    <h5>
                      Monte seu fluxo de pagamento
                    </h5>
                  </div>
                </div>
              </li>
              <li class="left">
                <div class="status">
                  <div class="pic">
                    <img src="@/assets/images/passo-6.png" alt="Passo 6" />
                  </div>
                  <div class="info">
                    <h5>
                      Escolha sua unidade
                    </h5>
                  </div>
                </div>
              </li>
              <li class="right">
                <div class="status">
                  <div class="pic">
                    <img src="@/assets/images/passo-7.png" alt="Passo 7" />
                  </div>
                  <div class="info">
                    <h5>
                      Visite o imóvel
                    </h5>
                  </div>
                </div>
              </li>
              <li class="left">
                <div class="status">
                  <div class="pic">
                    <img src="@/assets/images/passo-8.png" alt="Passo 8" />
                  </div>
                  <div class="info">
                    <h5>
                      Escolha seu imóvel
                    </h5>
                  </div>
                </div>
              </li>
              <li class="right">
                <div class="status">
                  <div class="pic">
                    <img src="@/assets/images/passo-1.png" alt="Passo 9" />
                  </div>
                  <div class="info">
                    <h5>
                      Receba seu contrato
                    </h5>
                  </div>
                </div>
              </li>
              <li class="left">
                <div class="status">
                  <div class="pic">
                    <img src="@/assets/images/passo-10.png" alt="Passo 10" />
                  </div>
                  <div class="info">
                    <h5>
                      Acompanhe o período de obras
                    </h5>
                  </div>
                </div>
              </li>
              <li class="right">
                <div class="status">
                  <div class="pic">
                    <img src="@/assets/images/passo-1.png" alt="Passo 11" />
                  </div>
                  <div class="info">
                    <h5>
                      Receba suas chaves
                    </h5>
                  </div>
                </div>
              </li>
              <li class="left">
                <div class="status">
                  <div class="pic">
                    <img src="@/assets/images/passo-12.png" alt="Passo 12" />
                  </div>
                  <div class="info">
                    <h5>
                      Seu sonho realizado!
                    </h5>
                  </div>
                </div>
              </li>
            </ul>
          </el-col> -->

          <el-col :xs="24">
            <h3 class="spaced">
              Pronto! Agora que você já sabe como funciona o
              <span>Programa Casa Verde e Amarela,</span>
              vamos fazer uma simulação? É rápido e super fácil.
              <br />
              Preencha abaixo!
            </h3>
          </el-col>
        </el-row>
      </div>
    </section>

    <Simulacao />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Simulacao from '@/components/Simulacao'
import McmvSection from '@/components/McmvSection'

export default {
  components: {
    Simulacao,
    McmvSection
  },
  async fetch({ store }) {
    try {
      if (store.getters['mcmv/getMcmvData'] === null)
        await store.dispatch('mcmv/getPageData')
    } catch (e) {
      throw new Error(e)
    }
  },
  computed: {
    ...mapGetters({
      pageData: 'mcmv/getMcmvData'
    })
  }
}
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 767px) {
  #page-mcmv {
    #bannermcmv {
      h1 {
        font-size: 3.75rem;
        margin-top: 3rem;
      }
    }

    #questionsMcmv,
    #documentacaoMcmv {
      padding-bottom: 2.5rem;
      h3 {
        @include appTitle(2.5rem);
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

.spaced {
  margin-top: 4rem;
  font-size: 2rem;
  text-align: center;

  span {
    color: $cherry;
  }
}

.items-doc {
  div {
    display: flex;
    flex-wrap: wrap;
    width: 60%;
    margin: 0 -0.5rem;
  }
  h5 {
    margin: 0 0.5rem 1rem 0.5rem;
    display: flex;
    align-items: center;
    border: 1px solid rgba(112, 112, 112, 0.5);
    border-radius: 1.875rem;
    padding: 0 2rem;
    height: 3rem;
    color: $flat-blue;
  }

  ul {
    margin: 2rem 0 !important;
  }
}

.container_app {
  display: flex;
  align-items: center;
}

#bannermcmv {
  position: relative;
  img {
    min-width: 100%;
    max-width: 100%;
    display: block;
  }
  h1 {
    font-size: 4.7rem;
    color: #fff;
    white-space: pre-line;
    line-height: 1.05;
  }
}

#infosmcmv {
  .el-row {
    padding: 4.5rem 0;
  }
}

#questionsMcmv,
#documentacaoMcmv {
  padding: 0 0 4.5rem 0;
  .item {
    margin-bottom: 3.5rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  h3 {
    @include appTitle(1.75rem);
  }

  h4 {
    @include appText;
    @include colorizedSubtitle($qs-blue, 1rem);
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    @include appText;
    position: relative;
    text-indent: 0.5rem;

    &:before {
      font-size: 0.7rem;
      font-family: element-icons !important;
      font-style: normal;
      line-height: 1;
      vertical-align: baseline;
      position: relative;
      left: -0.5rem;
      top: -0.1rem;
      content: '\e6dc';
      color: $black_two;
      transition: 0.3s ease-in all;
      font-weight: bold;
    }
  }

  .stepByStep {
    list-style-type: none;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    li {
      width: 50%;
      min-height: 12rem;
      text-decoration: none;
      .status {
        position: relative;
        .info {
          padding-left: 4rem;
          line-height: 12rem;
          h5 {
            line-height: 1;
            display: inline-block;
            border: 1px solid rgba(112, 112, 112, 0.5);
            padding: 1rem;
            border-radius: 1.875rem;
            color: #4177a6;
          }
        }
        &:before {
          content: '';
          width: 4rem;
          height: 4rem;
          background-color: $cherry;
          border-radius: 4rem;
          border: 1px solid $cherry;
          position: absolute;
          top: 4rem;
        }
      }
      &:before {
        content: none;
      }
      &.right {
        border-left: 2px solid $flat-blue;
        align-self: flex-end;
        text-align: left;
        .status {
          position: relative;
          .pic {
            display: inline-block;
            position: absolute;
            top: 4.6rem;
            left: -1.85rem;
            img {
              width: 3rem;
            }
          }
          &:before {
            left: -2rem;
          }
        }
      }
      &.left {
        width: 50%;
        margin-left: 2px;
        align-self: flex-start;
        text-align: right;
        border-right: 2px solid $flat-blue;
        .status {
          .pic {
            display: inline-block;
            position: absolute;
            top: 4.6rem;
            right: -1.5rem;
            img {
              width: 3rem;
            }
          }
          .info {
            padding-left: 0;
            padding-right: 4rem;
          }
          &:before {
            right: -2rem;
          }
        }
      }
    }
  }
}

#documentacaoMcmv {
  padding: 0 0 4.5rem 0 !important;
  .item {
    margin-bottom: 2.5rem;
  }
}
</style>
