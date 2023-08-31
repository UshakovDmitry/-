
<!-- в файле Layout.vue -->
<template>
  <div>
    <HeaderComponent />
    <div class="main-layout">
      <NavbarComponent />
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import HeaderComponent from './HeaderComponent.vue'
import NavbarComponent from './NavbarComponent.vue'
</script>

<style>
/* Ваши стили */
</style>
