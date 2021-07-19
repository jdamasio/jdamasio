<template>
  <div>
    <div id="errorPage">
      <h1>Página não encontrada.</h1>
      <a href="/">Clique aqui para voltar</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#errorPage {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 3rem;

  a {
    color: $black-two;
    transition: color 0.3s;
    font-size: 0.9rem;
    margin-left: 0.5rem;

    &:hover,
    &:active {
      color: lighten($color: $black-two, $amount: 40);
    }
  }
}
</style>
