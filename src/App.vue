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

.main-div { 
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  width: 100vw;
}

input[type=text] {
  width: 18rem;
  height: 4rem;
  margin: 1rem;
  border: 0;
  border-bottom: 0.1rem solid #f4f1f1;
  color: #f4f1f1;
  background: none;
}

input[type=text]:focus {
  outline: none;
}

.error{
  color: red;
}
</style>
