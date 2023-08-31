<template>
  <div class="navbar">
    <ul>
      <li>
        <router-link to="/main">Главная</router-link>
      </li>
      <li>
        <router-link to="/map">Карта</router-link>
      </li>
      <li>
        <router-link to="/orders">Заказы</router-link>
      </li>
      <li>
        <router-link to="/detail">Детали</router-link>
      </li>
      <li>
        <router-link to="/search">Поиск</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
// Импорты и логика (если необходимо)
</script>

<style>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 200px;
  background-color: #333;
  color: white;
  overflow: auto;
}

.navbar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.navbar li {
  padding: 8px;
  text-align: center;
}

.router-link-active {
  background-color: #666;
}
</style>
