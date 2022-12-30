<template>
  <router-view></router-view>
</template>


<style>
#app {
  height: 100vh;
  width: 100vw;
  background-image: url('/background.svg');
  background-size: cover;
  display: flex;
}

.main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40rem;
  height: 60rem;
  margin: 0 30rem 0 0;
  background-color: #003ea8d1;
  border-radius: 1rem;
}
</style>
