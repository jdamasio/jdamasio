<template>
  <div id="page-sustentabilidade">
    <section id="sustentabilidade" class="container_app">
      <el-row>
        <el-col :xs="24" :sm="12">
          <div class="content">
            <h1>
              Sustentabilidade
            </h1>
            <p>
              Além de pensar em cada detalhe para seu conforto e bem estar, nós
              também atuamos com responsabilidade prezando a preservação do meio
              ambiente. Por isso, nossos projetos contam com medidas que
              estimulam a conscientização e proporciona economia para todos.
            </p>
          </div>
          <div class="list">
            <ul>
              <li>
                <div class="icon">
                  <img
                    src="@/assets/images/bike-green.png"
                    alt="Bicicleta em área verde"
                  />
                </div>
                <h5>
                  Bicicletário
                </h5>
                <p>
                  Os empreendimentos preevem espaços com bicicletas entregues
                  pela CasaViva, contribuindo para a redução de veículos
                  automotores nas ruas, o que melhora o trânsito e reduz a
                  emissão de poluentes na atmosfera.
                </p>
              </li>
              <li>
                <div class="icon">
                  <img
                    src="@/assets/images/motor-elevador.png"
                    alt="Motor elétrico de elevator"
                  />
                </div>
                <h5>
                  Elevadores com motores de alta performance
                </h5>
                <p>
                  Além de proporcionar mais segurança, reduzem o consumo de
                  energia.
                </p>
              </li>
              <li>
                <div class="icon">
                  <img
                    src="@/assets/images/medidor-agua.png"
                    alt="Medidor de água"
                  />
                </div>
                <h5>
                  Previsão de medidores individuais de água e gás*
                </h5>
                <p>
                  Facilita o controle do consumo e evita o desperdício,
                  estimulando o uso consciente dos recursos naturais.
                  <br />
                  <small>
                    * Previsão em projeto: implantação e manutenção serão de
                    responsabilidade do condomínio.
                  </small>
                </p>
              </li>
              <li>
                <div class="icon">
                  <img src="@/assets/images/persiana.png" alt="Persiana" />
                </div>
                <h5>
                  Utilização de esquadrias de dormitórios com persiana de
                  enrolar
                </h5>
                <p>
                  Permite uma melhor iluminação e aeração do ambiente e reduz o
                  consumo de energia pelo usuário.
                </p>
              </li>
              <li>
                <div class="icon">
                  <img
                    src="@/assets/images/tubos-pex.png"
                    alt="Tubos PPR ou PEX"
                  />
                </div>
                <h5>
                  Utilização de tubos PPR e/ou PEX nas instalações hidráulicas
                  de água quente.
                </h5>
                <p>
                  Reduz o tempo de instalação do sistema hidráulico, garantindo
                  ótimo desempenho e eliminando riscos de vazamento e
                  entupimento, o que representa diminuição dos custos de obra e
                  manutenção.
                </p>
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :xs="24" :sm="10">
          <img src="@/assets/images/sustentabilidade.png" />
        </el-col>
      </el-row>
    </section>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style lang="scss" scoped>
#page-sustentabilidade {
  #sustentabilidade {
    padding: 4rem;
    background-color: #fff;

    .content {
      h1 {
        font-size: 2.5rem;
        color: #cf0025;
        margin-bottom: 20px;
      }
      p {
        max-width: 80%;
        font-size: 1.2rem;
        color: #111;
      }
    }

    img {
      margin-bottom: -0.3rem;
    }

    .list {
      max-width: 80%;
      ul {
        margin: 0;
        padding: 0;
        margin-top: 2rem;
        .icon {
          text-align: center;
          img {
            margin: 0;
            max-width: 64px;
          }
        }
        li {
          list-style-type: none;
          margin-bottom: 4rem;
        }
      }
      h5 {
        color: $flat-blue;
        font-size: 1.1rem;
      }
      p {
        color: #111;
        margin-top: 0.2rem;
        small {
          font-size: 0.6rem;
        }
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  #page-sustentabilidade {
    #sustentabilidade {
      padding: 2rem;

      img {
        max-width: 100%;
      }
    }
  }
}
</style>
