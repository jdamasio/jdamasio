<template>
  <section id="contactSec">
    <div class="container_app">
      <el-row type="flex" align="middle">
        <el-col :xs="24" :sm="11" class="st">
          <h1>
            Contato CasaViva
          </h1>
          <img
            width="285"
            height="314"
            :src="require('@/assets/images/letter-icon.svg')"
            alt="Ícone de carta"
          />
        </el-col>

        <el-col :xs="24" :sm="13">
          <form id="contactForm" @submit.prevent="contactSend">
            <div class="wrapper">
              <el-input
                v-model="formContact.name"
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
                    v-model.lazy="formContact.email"
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
                    v-model="formContact.telephone"
                    v-mask="['(##) ####-####', '(##) #####-####']"
                    placeholder=""
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
                  <el-select
                    v-model="formContact.client"
                    placeholder=""
                    class="appInput"
                    required
                    @blur="floatPlaceholderFunc($event)"
                    @focus="floatPlaceholderFunc($event)"
                    @touchstart="floatPlaceholderFunc($event)"
                    @touchend="floatPlaceholderFunc($event)"
                  >
                    <el-option label="Sim" value="ja_sou_cliente"></el-option>
                    <el-option label="Não" value="nao_sou_cliente"></el-option>
                  </el-select>
                  <span
                    class="float-placeholder"
                    @click="floatPlaceholderFunc($event, true)"
                  >
                    Já é cliente?
                  </span>
                </div>
              </el-col>

              <el-col :xs="24" :sm="12">
                <div class="wrapper">
                  <el-select
                    v-model="formContact.subject"
                    placeholder=""
                    class="appInput"
                    required
                    @blur="floatPlaceholderFunc($event)"
                    @focus="floatPlaceholderFunc($event)"
                    @touchstart="floatPlaceholderFunc($event)"
                    @touchend="floatPlaceholderFunc($event)"
                  >
                    <el-option
                      label="Interesse em empreendimento"
                      value="interesse"
                    ></el-option>
                    <el-option label="Dúvidas" value="duvidas"></el-option>
                    <el-option
                      label="Trabalhe conosco"
                      value="trabalhar_conosco"
                    ></el-option>
                    <el-option label="Terrenos" value="terrenos"></el-option>
                    <el-option
                      label="Outros assuntos"
                      value="outros_assuntos"
                    ></el-option>
                  </el-select>
                  <span
                    class="float-placeholder"
                    @click="floatPlaceholderFunc($event, true)"
                  >
                    Assunto
                  </span>
                </div>
              </el-col>

              <el-col :span="24">
                <div class="wrapper">
                  <el-input
                    v-model="formContact.message"
                    :rows="4"
                    type="textarea"
                    placeholder="Digite sua mensagem"
                    class="appInput"
                    required
                  ></el-input>
                </div>
              </el-col>
            </el-row>

            <button type="submit" class="btn-primary-white">
              Enviar
            </button>
          </form>
        </el-col>
      </el-row>
    </div>

    <el-dialog id="dialogContactForm" :visible.sync="dialogDataSent">
      <h2>Obrigado</h2>
      <p>Estamos redirecionando o seu contato</p>
      <img
        width="196"
        height="217"
        :src="require('@/assets/images/blue-envelop.png')"
        alt="Ícone de envelope"
      />
    </el-dialog>
  </section>
</template>

<script>
import { mask } from 'vue-the-mask'
import axios from 'axios'
import qs from 'qs'

export default {
  directives: {
    mask
  },
  data() {
    return {
      formContact: {
        name: '',
        email: '',
        telephone: '',
        client: '',
        subject: '',
        message: ''
      },
      dialogDataSent: false
    }
  },
  methods: {
    contactSend() {
      axios.put(
        'https://us-east-1.aws.webhooks.mongodb-stitch.com/api/client/v2.0/app/casaviva-front-wgpxc/service/casaviva_api/incoming_webhook/put_lead',
        qs.stringify({
          nome: this.formContact.name,
          email: this.formContact.email,
          telefone: this.formContact.telephone,
          tipo_cliente: this.formContact.client,
          tipo_contato: 'contato',
          assunto: this.formContact.subject,
          renda: '',
          fgts: '',
          aceitou_politica_data: '',
          canal_escolhido: '',
          mensagem: this.formContact.message,
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

      this.dialogDataSent = true
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
#contactSec {
  background-color: $qs-blue;
  padding: 4.5rem 0;
  color: #fff;

  h1 {
    @include appTitle(2.5rem);
  }

  .btn-primary-white {
    width: 100%;
    display: block;
    text-align: center;
    margin-top: 1.5rem;
    color: $qs-blue;
    font-size: 1.25rem;
    position: relative;
    &:hover,
    &:active {
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

  .st {
    text-align: center;
  }

  img {
    max-width: 16rem;
    height: auto;
  }
}

@media only screen and (max-width: 767px) {
  #contactSec {
    .el-row {
      flex-wrap: wrap;

      .st {
        margin-bottom: 4rem;

        img {
          max-width: 13rem;
        }
      }
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
      textarea {
        height: 11rem;
      }
    }
  }

  #dialogContactForm {
    .el-dialog {
      width: 90% !important;
    }
    h2 {
      font-size: 3.4rem !important;
    }
    p {
      word-break: break-word;
    }
    img {
      max-width: 9rem !important;
    }
  }
}

#dialogContactForm {
  text-align: center;

  .el-dialog {
    max-width: 900px;
  }

  h2 {
    font-size: 4.9rem;
    color: $flat-blue;
    margin-bottom: 0.4rem;
  }
  p {
    @include appText;
    color: $flat-blue;
  }

  img {
    max-width: 12rem;
    margin: 3rem 0 4rem 0;
    height: auto;
  }

  button.el-dialog__headerbtn {
    font-size: 3rem !important;

    i {
      color: $pinkish-red !important;
    }
  }
}
</style>
