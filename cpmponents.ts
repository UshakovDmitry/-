<template>
  <header class="app-header">
    <div class="logo">
      Моё Приложение
    </div>
    <nav class="main-nav">
      <a href="#" @click="logout">Выйти</a>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const logout = () => {
  // здесь ваш код для выхода из системы, например:
  localStorage.removeItem('user');
  window.location.reload();
};
</script>

<style>
.app-header {
  background-color: #4CAF50;
  color: white;
  padding: 15px;
  text-align: center;
  width: 100%;
  top: 0;
  z-index: 1000;
}

.logo {
  float: left;
}

.main-nav {
  float: right;
}
</style>


