<template>
  <div v-if="pageData" id="page-fale-conosco">
    <ContactForm />

    <section id="infos-contact">
      <div class="container_app map">
        <div class="st">
          <h3>
            {{ pageData.metadata.find((item) => item.key === 'map').title }}
          </h3>

          <iframe
            :src="pageData.metadata.find((item) => item.key === 'map').content"
          ></iframe>
        </div>
      </div>

      <div class="container_app">
        <el-row id="details-contact">
          <el-col :xs="24" :sm="4">
            <h3>
              Nossos
              <br />
              Contatos
            </h3>
          </el-col>

          <el-col :xs="24" :sm="19" :offset="1" class="list">
            <el-row :gutter="10">
              <el-col
                v-for="(detail, index) in pageData.channels"
                :key="index"
                :xs="12"
                :sm="6"
                class="item"
              >
                <table>
                  <tr>
                    <td><i :class="`cv-icons ${detail.icon_slug}`"></i></td>
                    <td>
                      <h4>{{ detail.title }}</h4>
                      <address v-if="detail.title === 'Endereço'">
                        {{ detail.content }}
                      </address>
                      <p v-else-if="detail.title === 'Telefone'">
                        <a :href="`tel:${detail.content.replace(/\D/g, '')}`">
                          {{ detail.content }}
                        </a>
                      </p>
                      <p v-else-if="detail.title === 'WhatsApp'">
                        <a
                          :href="
                            `https://api.whatsapp.com/send?phone=+55${detail.content.replace(
                              /\D/g,
                              ''
                            )}&text`
                          "
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {{ detail.content }}
                        </a>
                      </p>

                      <p v-else-if="detail.title === 'Chat online'">
                        <a href="">
                          {{ detail.content }}
                        </a>
                      </p>
                    </td>
                  </tr>
                </table>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ContactForm from '@/components/ContactForm'

export default {
  components: {
    ContactForm
  },
  async fetch({ store }) {
    try {
      if (store.getters['contact/getContactData'] === null)
        await store.dispatch('contact/getPageData')
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    }
  },
  computed: {
    ...mapGetters({
      pageData: 'contact/getContactData'
    })
  }
}
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 767px) {
  #infos-contact {
    .map {
      padding: 0 !important;

      h3 {
        padding-left: 1.75rem;
        margin-bottom: 1.5rem !important;
      }

      iframe {
        height: 27rem !important;
      }
    }
    #details-contact {
      margin-bottom: 1rem !important;
      padding: 2.5rem 0 1rem 0 !important;
      .list {
        margin-top: 3rem;
        margin-left: 0 !important;
      }

      table {
        td {
          display: block;

          i {
            font-size: 2.2rem !important;
            display: inline-block;
            margin-bottom: 0.3rem;
          }
        }
      }
      .item {
        margin-bottom: 2rem;
        min-height: 9.5rem;
      }
    }
  }
}

#infos-contact {
  .st {
    padding: 4.5rem 0 4.5rem 0;

    h3 {
      @include appTitle(3rem);
    }

    iframe {
      display: block;
      width: 100%;
      height: 40rem;
      max-height: 80vh;
      border: 0;
    }
  }

  #details-contact {
    margin-bottom: 3rem;
    border-top: 1px solid rgba($color: #010101, $alpha: 0.1);
    border-bottom: 1px solid rgba($color: #010101, $alpha: 0.1);
    padding: 2.5rem 0 2.5rem 0;

    h3 {
      @include appTitle(0);
    }

    h4 {
      @include appText;
      @include colorizedSubtitle($qs-blue, 0.5rem);
    }

    p {
      @include appText;
    }

    i {
      width: 2rem;
    }

    table td {
      vertical-align: top;
      min-width: 2rem;
      @include appText;

      address,
      a {
        text-indent: 0.2rem;
        font-style: normal;

        &:before {
          font-size: 0.8rem;
          font-family: element-icons !important;
          font-style: normal;
          line-height: 1;
          vertical-align: baseline;
          position: relative;
          left: 0;
          top: -0.08rem;
          content: '\e6dc';
          color: $black_two;
          transition: 0.3s ease-in all;
          font-weight: bold;
          transition: color 0.3s ease-in;
        }
      }

      a {
        color: $black-two;
        text-decoration: none;
        transition: color 0.3s ease-in;
        &:hover,
        &:active {
          &:before {
            color: lighten($color: $black-two, $amount: 50);
          }
          text-decoration: underline;
          color: lighten($color: $black-two, $amount: 50);
        }
      }

      i {
        color: $cherry;
        font-size: 1.75rem;
        position: relative;
        top: -0.25rem;
        left: -0.2rem;
      }
    }
  }
}
</style>
