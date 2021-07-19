# CasaViva UI - NuxtJS

> Portal CasaViva

## Setup da Build Imagem Docker (SERVIDOR)

Ambiente de QA Atual:
[![servidor de qa](https://app.buddy.works/hqmoura/casaviva-ui/pipelines/pipeline/258058/badge.svg?token=1a52a56dafd47091fa45da3e784b963df99cbb94898076820b4ddad3fce1e854 "servidor de qa")](https://app.buddy.works/hqmoura/casaviva-ui/pipelines/pipeline/258058)

É necessário ter instalado Docker e Docker Compose (3)

Na pasta raiz, rode:

```bash
docker-compose up --build -d
```

Pronto. Uma imagem Docker será lançada baseada no `app` e no `nginx`.

Para verificar as informações dos containers

```bash
docker ps
```

Para derrubar um container:

```bash
docker kill CONTAINER_ID
```

## Setup da Build Básico (DESENVOLVIMENTO LOCAL)

Primeiramente entre na pasta `app`

```bash
# install dependencies
$ npm install

# Servir os arquivos com hot reload no localhost:3000
$ npm run dev

#Abaixo apenas para pipeline de produção

# Build final com servidor (Desnecessário para fins de desenvolvimento, production-only)
$ npm run build
$ npm run start

# Gerar projeto estático
$ npm run generate
```

## Guia de Estilo

CasaViva possuí o styleguide guiado por este documento:

https://zpl.io/advGrv7

(Solicite acesso através do email da empresa)

## dotenv

Utilizamos um arquivo `.env` com parâmetros de configurações globais. Este arquivo é ignorado pelo .gitignore.

Crie manualmente este arquivo com o conteúdo:

```
BASE_URL=http://localhost:3000
MODE="[DEV]"
DEV_API_URL=http://qa-cv-api.adjektiv.com.br

```

## Element-UI

O projeto utiliza como framework o Element UI. Mais informações na [página de documentação do ElementUI](https://element.eleme.io/#/en-US)

Utilizar sempre que possível os elementos do ElementUI evitando criar componentes visuais desnecessários.

Alguns elementos utilizados ao longo do projeto:

- Grid system de 24 colunas
- Icones
- Carousel
- Calendar
- Dialog (Modal)
- Back to top

## Vuex

O projeto utiliza `Vuex`. Todo o fluxo de dados deve estar separado e alocado propriamente dentro de uma `store`

## !!! Use o git flow !!!!

Este projeto utiliza como premissa de desenvolvimento o `git flow`

A cada nova `feature` deve se abrir um `pull request`

Mantenha sempre seu `branch develop local` alinhado com o `branch develop remoto`.

Os `releases` devem ser feitos apenas pelo responsável pela publicação do projeto. A branch `master` esta conectada ao ambiente de `QA` e os `deploys` são feitos automaticamente.

Para verificar o ambiente de QA, acesse: [`qa-cv.adjektiv.com.br`](qa-cv.adjektiv.com.br)

## English components, styles, functions etc

Although commenting can be done in Portuguese, all the functions, components, markups, hooks, styles, scripts and basically everything must be written in English.

## Linting e Editor

O projeto utiliza `ESLint` e `Prettier`.

A recomendação é usar VSCode com `Prettier`, porém, é possível usar o arquivo `.editorconfig` em qualquer outro editor de texto que suporte ESLint e Prettier.

A configuração de `auto format on save` deve estar ativada.

Toda configuração de linting deve estar disponível com essas configurações, porém, em caso de dúvidas, o estilo adotado é padrão `StandardJS`

## Links úteis

[Git flow e comandos básicos](https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow) - Necessário para o desenvolvimento

[Documentação do NuxtJS](https://nuxtjs.org/guide) - Framework principal, SSR

[Documentação do Axios](https://github.com/axios/axios) - HTTP-Client para requests baseado em promises.

[Documentação da Vuex](https://vuex.vuejs.org/guide/) - Store/State management para a aplicação.

[Extensão Vue-devtools para Chrome](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=pt-BR) - Extensão que facilita bastante o desenvolvimento em Vue no navegador Chrome
