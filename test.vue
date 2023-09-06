<template>
  <div>
    <HeaderComponent v-if="!isAuthPage" />
    <div class="main-layout">
      <NavbarComponent v-if="!isAuthPage" />
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import HeaderComponent from '../components/HeaderComponent.vue';
import NavbarComponent from '../components/NavbarComponent.vue';

const route = useRoute();
const isAuthPage = ref(route.path === '/auth');
</script>

