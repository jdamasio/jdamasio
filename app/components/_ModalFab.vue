<template>
  <el-dialog
    id="dialogFab"
    :visible.sync="showModal"
    @close="goToStartStep"
    @open="modalOpened"
  >
    <transition name="fade">
      <div v-if="step1" class="step1">
        <h2>
          Você já é
          <br />
          nosso cliente?
        </h2>

        <div class="wrapButtons">
          <a class="btn-primary-white" @click.prevent="choiceClient(true)">
            Já sou cliente CasaViva
          </a>

          <a class="btn-primary-red" @click.prevent="choiceClient(false)">
            Ainda não sou cliente
          </a>
        </div>
      </div>
    </transition>

    <transition name="fade">
      <div v-if="nCliente" class="stepNCliente">
        <h2>Preencha seus dados para prosseguir</h2>

        <form @submit.prevent="clientDataSend">
          <el-input
            v-model="formDialogFab.name"
            placeholder="Digite seu nome"
            type="text"
            class="appInput"
          ></el-input>

          <el-input
            v-model.lazy="formDialogFab.email"
            placeholder="Digite seu e-mail"
            type="email"
            class="appInput"
          ></el-input>

          <el-input
            v-model="formDialogFab.telephone"
            v-mask="['(##) ####-####', '(##) #####-####']"
            placeholder="Digite seu telefone"
            type="tel"
            class="appInput"
          ></el-input>

          <button class="btn-primary-red" type="submit">
            Enviar
          </button>
        </form>
        <div class="goback" @click="goBack('ncliente')">
          ←
        </div>
      </div>
    </transition>

    <transition name="fade">
      <div v-if="cliente" class="stepCliente">
        <h2>
          Legal! Você já é um cliente. Quer falar sobre algum assunto
          específico?
        </h2>
        <div class="goback" @click="goBack('cliente')">
          ←
        </div>
      </div>
    </transition>
  </el-dialog>
</template>

<script>
import { mask } from 'vue-the-mask'

export default {
  directives: {
    mask
  },
  data() {
    return {
      showModal: false,
      step1: true,
      cliente: '',
      nCliente: '',
      formDialogFab: {
        name: '',
        email: '',
        telephone: ''
      }
    }
  },
  created() {
    this.$bus.$on('open-modal-fab', () => {
      this.showModal = true
    })
  },
  methods: {
    clientDataSend() {
      // eslint-disable-next-line no-console
      console.log(this.formDialogFab)
    },
    goToStartStep() {
      setTimeout(() => {
        if (this.cliente) this.cliente = false
        if (this.nCliente) this.nCliente = false
        if (!this.step1) this.step1 = true
      }, 350)
    },
    choiceClient(choice) {
      this.step1 = false
      setTimeout(() => {
        if (choice) this.cliente = true
        else this.nCliente = true
      }, 350)
    },
    goBack(x) {
      if (x === 'cliente') this.cliente = false
      else if (x === 'ncliente') this.nCliente = false

      setTimeout(() => {
        this.step1 = true
      }, 350)
    },
    modalOpened() {
      this.$bus.$emit('modal-fab-opened')
    }
  }
}
</script>

<style lang="scss">
#dialogFab {
  text-align: center;
  .el-dialog {
    margin-top: 5% !important;
    width: 44rem;
    max-width: 85%;
    min-height: 34rem;
    display: flex;
    align-items: center;
    justify-content: center;
    // top: 45%;
    // transform: translateY(-50%);
  }
  .el-dialog__header {
    padding: 0 !important;
  }

  .el-dialog__body {
    padding: 1.875rem 1.25rem;
  }

  h2 {
    font-size: 3.5rem;
    color: $cherry;
    margin-bottom: 2rem;
    line-height: 1.2;
    word-break: normal;
  }

  button.el-dialog__headerbtn {
    font-size: 3rem !important;
    top: 1rem;
    right: 1rem;

    i {
      color: $pinkish-red !important;
    }
  }

  .step1,
  .stepCliente,
  .stepNCliente {
    padding: 1rem 2.5rem 2.5rem 3rem !important;
  }
  .stepNCliente {
    padding: 1rem 3rem 1.5rem 3rem !important;

    form {
      margin-top: 2.5rem;
    }
    input {
      border-color: $cherry !important;
      color: $cherry !important;
      border-radius: 1.25rem;

      &::placeholder {
        color: $cherry;
      }
    }
    button {
      display: block;
      width: 100%;
      margin-top: 0.75rem;
    }
  }

  .wrapButtons {
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
      width: 30rem;
      padding: 1.25rem 0;
    }
    .btn-primary-white {
      border: 2px solid $cherry;
      color: $cherry;
      margin-bottom: 2rem;
      font-size: 1.25rem;

      &:hover,
      &:active {
        background-color: $cherry;
        color: #fff;
      }

      &:after {
        content: unset;
      }
    }
  }

  .goback {
    color: $cherry;
    font-size: 2rem;
    position: absolute;
    left: 1.75rem;
    bottom: 1.5rem;
    cursor: pointer;
  }
}

@media only screen and (max-width: 767px) {
  #dialogFab {
    h2 {
      font-size: 2.5rem !important;
    }
    .el-dialog {
      max-width: 95%;

      a {
        max-width: 80%;
      }
    }
  }
}
</style>
