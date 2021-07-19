<template>
  <section id="simulacaoSec">
    <div class="container_app">
      <el-row type="flex" align="middle" class="row">
        <el-col :xs="24" :sm="11" class="first-col-mob">
          <h1>
            Simule aqui o
            <br />
            financiamento
            <br />
            do seu novo Apê!
          </h1>
          <img
            width="435"
            height="238"
            :src="require('@/assets/images/simulacao_icon.svg')"
            alt="Ícone de simulação"
          />
        </el-col>

        <el-col :xs="24" :sm="13">
          <form id="formSimulacao" @submit.prevent="financingSimulate">
            <div class="wrapper">
              <el-input
                v-model="formSimulate.name"
                placeholder=""
                type="text"
                class="appInput"
                required
                @blur="floatPlaceholderFunc($event)"
                @focus="floatPlaceholderFunc($event)"
                @touchstart="floatPlaceholderFunc($event)"
                @touchend="floatPlaceholderFunc($event)"
              ></el-input>
              <span
                class="float-placeholder"
                @click="floatPlaceholderFunc($event, true)"
              >
                Digite seu nome
              </span>
            </div>

            <el-row :gutter="20">
              <el-col :xs="24" :sm="12">
                <div class="wrapper">
                  <el-input
                    v-model.lazy="formSimulate.email"
                    placeholder=""
                    type="email"
                    class="appInput"
                    required
                    @blur="floatPlaceholderFunc($event)"
                    @focus="floatPlaceholderFunc($event)"
                    @touchstart="floatPlaceholderFunc($event)"
                    @touchend="floatPlaceholderFunc($event)"
                  ></el-input>
                  <span
                    class="float-placeholder"
                    @click="floatPlaceholderFunc($event, true)"
                  >
                    Digite seu e-mail
                  </span>
                </div>
              </el-col>

              <el-col :xs="24" :sm="12">
                <div class="wrapper">
                  <el-input
                    v-model="formSimulate.telephone"
                    v-mask="['(##) ####-####', '(##) #####-####']"
                    placeholder=""
                    minlength="14"
                    type="tel"
                    class="appInput"
                    required
                    @blur="floatPlaceholderFunc($event)"
                    @focus="floatPlaceholderFunc($event)"
                    @touchstart="floatPlaceholderFunc($event)"
                    @touchend="floatPlaceholderFunc($event)"
                  ></el-input>
                  <span
                    class="float-placeholder"
                    @click="floatPlaceholderFunc($event, true)"
                  >
                    Digite seu telefone
                  </span>
                </div>
              </el-col>

              <el-col :xs="24" :sm="12">
                <div class="wrapper">
                  <el-input
                    v-model="formSimulate.rent"
                    v-money="formSimulate.rent !== '' ? moneyConfig : null"
                    maxlength="11"
                    placeholder=""
                    class="appInput"
                    type="tel"
                    required
                    @blur="floatPlaceholderFunc($event)"
                    @focus="floatPlaceholderFunc($event)"
                    @touchstart="floatPlaceholderFunc($event)"
                    @touchend="floatPlaceholderFunc($event)"
                  ></el-input>
                  <span
                    class="float-placeholder"
                    @click="floatPlaceholderFunc($event, true)"
                  >
                    Digite sua renda
                  </span>
                </div>
              </el-col>

              <el-col :xs="24" :sm="12">
                <div class="wrapper">
                  <el-select
                    v-model="formSimulate.fgts"
                    placeholder=""
                    class="appInput"
                    required
                    @change="fgtsChoiceM($event)"
                    @blur="floatPlaceholderFunc($event)"
                    @focus="floatPlaceholderFunc($event)"
                    @touchstart="floatPlaceholderFunc($event)"
                    @touchend="floatPlaceholderFunc($event)"
                  >
                    <el-option label="Sim" value="yes"></el-option>
                    <el-option label="Não" value="no"></el-option>
                  </el-select>
                  <span
                    class="float-placeholder"
                    @click="floatPlaceholderFunc($event, true)"
                  >
                    Possui FGTS?
                  </span>
                </div>
              </el-col>

              <transition name="fade">
                <el-col v-if="fgtsChoice" :xs="24" :sm="12">
                  <div class="wrapper">
                    <el-input
                      v-model="formSimulate.fgtsValue"
                      v-money="
                        formSimulate.fgtsValue !== '' ? moneyConfig : null
                      "
                      maxlength="13"
                      placeholder=""
                      class="appInput"
                      type="tel"
                      required
                      @blur="floatPlaceholderFunc($event)"
                      @focus="floatPlaceholderFunc($event)"
                      @touchstart="floatPlaceholderFunc($event)"
                      @touchend="floatPlaceholderFunc($event)"
                    ></el-input>

                    <span
                      class="float-placeholder"
                      @click="floatPlaceholderFunc($event, true)"
                    >
                      Digite seu FGTS
                    </span>
                  </div>
                </el-col>
              </transition>

              <el-col :span="24">
                <el-checkbox-group
                  v-model="formSimulate.agree"
                  class="appInput"
                  required
                >
                  <el-checkbox name="agree" required>
                    <span class="el-checkbox__label">
                      Autorizo que meus dados sejam coletados para eventual
                      contato com ofertas e novidades.
                      <nuxt-link :to="{ name: 'politica-de-privacidade' }">
                        Leia a política de privacidade.
                      </nuxt-link>
                    </span>
                  </el-checkbox>
                </el-checkbox-group>
              </el-col>
            </el-row>

            <button type="submit" class="btn-primary-blue">
              Simule agora
            </button>
          </form>
        </el-col>
      </el-row>
    </div>

    <el-dialog id="dialogSimulacao" :visible.sync="dialogData.show">
      <h2>Veja seu potencial de financiamento</h2>
      <p>
        Olá
        <strong>{{ formSimulate.name }}</strong>
        ,
        <br />
        Seu potencial de financiamento é :
      </p>
      <br />

      <h4>
        Renda -
        <span>{{ dialogData.rent }}</span>
      </h4>
      <h4>
        FGTS -
        <span>{{ dialogData.fgts }}</span>
      </h4>
      <h4>
        Potencial de Financiamento -
        <span>{{ dialogData.result }}</span>
      </h4>
    </el-dialog>
  </section>
</template>

<script>
import { mask } from 'vue-the-mask'
import { VMoney } from 'v-money'
import axios from 'axios'
import qs from 'qs'

export default {
  directives: {
    mask,
    money: VMoney
  },
  data() {
    return {
      showModal: false,
      formSimulate: {
        name: '',
        email: '',
        telephone: '',
        rent: '',
        fgts: '',
        fgtsValue: '',
        agree: false
      },
      moneyConfig: {
        decimal: ',',
        thousands: '.',
        prefix: 'R$ ',
        suffix: '',
        precision: 2,
        allowBlank: true,
        masked: false /* doesn't work with directive */
      },
      fgtsChoice: false,
      dialogData: {
        show: false,
        rent: '',
        fgts: '',
        result: ''
      }
    }
  },
  methods: {
    financingSimulate() {
      axios.get('/mcmv_data.json').then((response) => {
        const dataMcmvDetails = response.data.data

        const financingCalculation = (matched, rent, fgts, fgtsValue = 0) => {
          const months = 360
          const monthlyInterestRate =
            (1 + parseFloat(matched.taxa_juros_nominal) / 100) ** (1 / 12) - 1

          const subsidy =
            matched.com_dependente > 0 ? parseFloat(matched.com_dependente) : 0

          let finalFgtsValue = 0
          if (fgts) finalFgtsValue = fgtsValue

          return parseFloat(
            (parseInt(rent) * 0.3 * parseInt(months)) /
              (1 + parseInt(months) * monthlyInterestRate) +
              parseFloat(finalFgtsValue) +
              subsidy
          ).toFixed(0)
        }

        const rentVal = parseInt(
          this.formSimulate.rent.replace(/[^0-9|\\,]/g, '').replace(',', '.')
        )

        const fgtsVal = parseInt(
          this.formSimulate.fgtsValue
            .replace(/[^0-9|\\,]/g, '')
            .replace(',', '.')
        )

        const matchedObject = dataMcmvDetails.reduce((prev, curr) => {
          return Math.abs(curr.renda - rentVal) < Math.abs(prev.renda - rentVal)
            ? curr
            : prev
        })

        if (this.fgtsChoice) {
          const calcReturn = financingCalculation(
            matchedObject,
            rentVal,
            true,
            fgtsVal
          )
          const formattedCalcReturn = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(calcReturn)

          this.dialogData.result = formattedCalcReturn
          this.dialogData.fgts =
            fgtsVal > 0 ? this.formSimulate.fgtsValue : 'FGTS NÃO INFORMADO'
        } else {
          const calcReturn = financingCalculation(matchedObject, rentVal, false)
          const formattedCalcReturn = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(calcReturn)

          this.dialogData.result = formattedCalcReturn
          this.dialogData.fgts = 'FGTS NÃO INFORMADO'
        }

        this.dialogData.rent =
          rentVal > 0 ? this.formSimulate.rent : 'RENDA NÃO INFORMADA'

        this.dialogData.show = true

        axios
          .put(
            'https://us-east-1.aws.webhooks.mongodb-stitch.com/api/client/v2.0/app/casaviva-front-wgpxc/service/casaviva_api/incoming_webhook/put_lead',
            qs.stringify({
              nome: this.formSimulate.name,
              email: this.formSimulate.email,
              telefone: this.formSimulate.telephone,
              tipo_cliente: '',
              tipo_contato: 'simulador',
              assunto: '',
              renda: rentVal > 0 ? this.formSimulate.rent : 0,
              fgts: fgtsVal > 0 ? this.formSimulate.fgtsValue : 0,
              aceitou_politica_data: Date.now(),
              canal_escolhido: '',
              mensagem: '',
              metadata: [
                {
                  key: 'utm_campaign',
                  value: 'testeCampaign'
                }
              ]
            }),
            {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
            }
          )
          .then((respLead) => {
            // eslint-disable-next-line no-console
            console.log(respLead)
          })
      })
    },
    fgtsChoiceM(value) {
      if (value === 'yes') this.fgtsChoice = true
      else this.fgtsChoice = false
    },
    floatPlaceholderFunc(event, floatElement = false) {
      if (floatElement) {
        event.target.classList.add('active')
        event.target.parentNode.querySelector('input').focus()
      } else {
        let wrapper

        for (let index = 0; index < event.path.length; index++) {
          if (event.path[index].classList.contains('wrapper')) {
            wrapper = event.path[index]
            break
          }
        }

        const floatEl = wrapper.querySelector('.float-placeholder')

        if (
          (event.type === 'blur' || event.type === 'touchend') &&
          wrapper.querySelector('input').value.length === 0
        ) {
          // if (floatEl.classList.contains('active'))
          floatEl.classList.remove('active')
        } else {
          floatEl.classList.add('active')
        }
      }
    }
  }
}
</script>

<style lang="scss">
#simulacaoSec {
  background-color: $cherry;
  padding: 4.5rem 0;
  color: #fff;

  h1 {
    @include appTitle(1rem);
  }

  .btn-primary-blue {
    width: 100%;
    display: block;
    text-align: center;
    margin-top: 2.75rem;
    color: $white;
    font-size: 1.25rem;
    position: relative;
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
      color: $white;
      transition: 0.3s ease-in all;
    }
  }

  img {
    max-width: 25rem;
    height: auto;
  }

  #dialogSimulacao {
    h2 {
      font-size: 2rem;
      color: $cherry;
      margin-bottom: 2rem;
    }

    p {
      font-size: 1.25rem;
      color: $black-two;
    }

    h4 {
      font-size: 1.25rem;

      span {
        color: $cherry;
      }
      margin-bottom: 1rem;
    }
  }
}

@media only screen and (max-width: 767px) {
  #simulacaoSec {
    padding: 4rem 0 4rem 0;
    .row {
      flex-wrap: wrap;

      .first-col-mob {
        text-align: center;
        margin-bottom: 4rem;
      }
    }

    img {
      max-width: 19rem;
      margin-top: 0.5rem;
    }

    .appInput {
      min-width: 100%;
      input,
      textarea,
      select {
        font-size: 1.35rem;
        border: 1px solid #fff;
        height: 5rem;
        border-radius: 1rem;
      }
    }
  }

  #dialogSimulacao {
    .el-dialog {
      width: 95%;
    }

    h2,
    h4 {
      word-break: initial;
    }
  }
}
</style>
