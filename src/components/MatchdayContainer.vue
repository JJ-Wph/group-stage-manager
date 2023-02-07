<template>
<div class="container">
  <div class="header">
    <slot name="header" />
  </div>
  <div class="main">
    <slot name="default" />
  </div>
</div>
</template>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
    height: 80%;
    background-color: #002e487e;
  }

  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 20%;
    background-color: #003ea88a;
  }
  .main {
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  @media screen and (max-width: 1080px) {
    .container {
      height: 30%;
      width: 100%;
      margin: 1rem 0rem 1rem 0rem;
    }

    .container:first-child {
      margin: 0rem 0rem 1rem 0rem;
    }
  }

  @media screen and (max-width: 1080px) and (orientation: landscape){
    .container {
      width: 30%;
      height: 75%;
      margin: 1rem;
    }
    .container:first-child {
      margin: 1rem;
    }
  }
</style>