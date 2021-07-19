<template>
  <footer>
    <el-row :gutter="15">
      <el-col :xs="24" :sm="5">
        <ul>
          <li class="strong">
            <nuxt-link :to="{ name: 'minha-casa-minha-vida' }">
              O programa Minha Casa Minha Vida
            </nuxt-link>
          </li>
          <li class="strong">
            <nuxt-link :to="{ name: 'sobre-casaviva' }">
              Sobre a CasaViva
            </nuxt-link>
          </li>
          <li class="strong">
            <nuxt-link :to="{ name: 'sustentabilidade' }">
              Sustentabilidade
            </nuxt-link>
          </li>
          <li class="strong">
            <a
              href="https://casaviva.freshdesk.com/support/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              Espaço do Cliente
            </a>
          </li>
          <li class="strong">
            <nuxt-link :to="{ name: 'fale-conosco' }">
              Contato
            </nuxt-link>
          </li>
        </ul>
      </el-col>

      <el-col :xs="24" :sm="4">
        <ul class="emps">
          <li class="strong">Empreendimentos</li>
          <li>
            <nuxt-link to="/ficha/casaviva-morumbi">
              » CasaViva Morumbi
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/lyne-pirituba">
              » Lyne Pirituba
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/nossos-produtos">
              » CasaViva Giovanni Gronchi
            </nuxt-link>
          </li>
          <li class="strong t-cherry">
            <nuxt-link :to="{ name: 'simulador' }">
              Simule seu financiamento
            </nuxt-link>
          </li>
        </ul>
      </el-col>

      <el-col :xs="24" :sm="4">
        <ul class="sm">
          <li class="strong">
            Redes sociais
          </li>
          <li>
            <a
              href="https://www.facebook.com/casavivasp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              » Facebook
              <i class="cv-icons cv-facebook"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/minha_casa_viva/?hl=pt-br"
              target="_blank"
              rel="noopener noreferrer"
            >
              » Instagram
              <i class="cv-icons cv-instagram"></i>
            </a>
          </li>
          <li>
            <a
              href="https://br.linkedin.com/company/minhacasaviva"
              target="_blank"
              rel="noopener noreferrer"
            >
              » Linkedin
              <i class="cv-icons cv-linkedin"></i>
            </a>
          </li>
        </ul>
      </el-col>

      <el-col :xs="24" :sm="4">
        <ul>
          <li class="strong">
            <nuxt-link :to="{ name: 'termos-e-condicoes' }">
              Termos e Condições
            </nuxt-link>
          </li>
          <li class="strong">
            <nuxt-link :to="{ name: 'politica-de-privacidade' }">
              Política de Privacidade e Cookies
            </nuxt-link>
          </li>
        </ul>
      </el-col>
    </el-row>

    <FloatCta />
    <CookiesAlert />
  </footer>
</template>

<script>
import FloatCta from '@/components/_FloatCta'
import CookiesAlert from '@/components/_CookiesAlert'

export default {
  components: {
    FloatCta,
    CookiesAlert
  }
}
</script>

<style lang="scss" scoped>
$gutter: 2.5rem;
footer {
  background-color: #fff;
  color: $black-two;
  padding: 4.5rem $gutter 2rem $gutter;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 1.5rem;

      &:last-child {
        margin-bottom: 0;
      }

      &.strong {
        font-weight: bold;
      }
    }
  }

  a {
    color: $black-two;
    text-decoration: none;
    transition: color 0.3s;
    font-size: 0.9rem;

    &:hover,
    &:active {
      color: lighten($color: $black-two, $amount: 40);
      text-decoration: underline;
    }
  }
}

@media only screen and (max-width: 767px) {
  footer {
    padding: 4rem 1.75rem 8.5rem 1.75rem;

    ul {
      li {
        margin-bottom: 1.1rem !important;

        &:last-child {
          margin-bottom: 0 !important;
        }
      }
    }
    .el-col {
      margin-bottom: 2rem;
      &:last-child {
        margin-bottom: 0;
      }
    }
    li,
    a {
      font-size: 1.25rem !important;
    }
    .emps,
    .sm {
      a {
        padding-left: 1rem;
      }
    }
  }
}
</style>
