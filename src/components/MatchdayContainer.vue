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
    width: 30rem;
    height: 25rem;
    margin: 3rem;
    background-color: #002e487e;
    font-size: 1.25rem;
  }

  .header {
    display: flex;
    justify-content: center;
    width: 30rem;
    height: 5rem;
    background-color: #003ea88a;
  }
  .main {
    width: 30rem;
    height: 20rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>