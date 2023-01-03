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
    font-size: 1.8rem;
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
    align-items: center;
    justify-content: center;
  }
</style>