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
      margin: 0 30rem 0 0;
      background-color: #3e2fc46b;
      font-size: 1.25rem;
    }

  h1 {
    text-align: center;
    margin: 2rem 0 2rem 0;
  }
</style>