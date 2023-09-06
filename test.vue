<template>
  <div :class="{ 'auth-route': isAuthRoute }">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isAuthRoute = ref(route.path === '/auth');

watch(route, () => {
  isAuthRoute.value = route.path === '/auth';
});
</script>

<style>
#app {
  padding-left: 70px;
  padding-top: 107px;
  width: calc(100% - 107px);
  /* другие стили */
}

#app.auth-route {
  padding-left: 0;
  padding-top: 0;
  width: 100%;
}
</style>
