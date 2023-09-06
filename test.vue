<template>
  <router-view />
</template>

<script setup lang="ts"></script>

<style lang="scss">
@import './assets/styles/main.scss';

#app {
  // border: 2px solid rgb(245, 5, 5);
  padding-left: 70px;
  padding-top: 107px;
  margin: 0px;
  // padding: 0;
  width: calc(100% - 107px);
  min-height: 100vh;
  color: #2c3e50;
  background-color: #f8f9fd;
  margin: 0;
  border: 1px solid #1e39a8;
}

.app__content {
  padding: 0;
}
</style>

