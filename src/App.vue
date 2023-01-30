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
  align-items: center;
}

.error{
  color: red;
}

@media screen and (max-width: 1080px) {
  #app {
      justify-content: center;
      height: 100%;
      width: 100%;
  }
}

</style>
