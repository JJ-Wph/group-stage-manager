<template>
<div>
    <slot>
    </slot>
</div>
</template>

<style scoped>
  div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 40rem;
      height: 60rem;
      margin: 1rem 20rem 1rem 1rem;
      background-color: #3e2fc46b;
      font-size: 1.25rem;
    }

  h1 {
    text-align: center;
    margin: 2rem 0 2rem 0;
  }

  @media screen and (max-width: 1080px) {
    div {
      margin: 0;
      width: 25rem;
      height: 35rem;
    }
  }

  @media screen and (max-width: 1080px) and (orientation: landscape) {
    div {
      margin: 1rem 10rem 1rem 1rem;
      width: 22rem;
      height: 26rem;
    }
  }
</style>