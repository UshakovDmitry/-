<template>
  <div class="navbar">
    <router-link to="/dashboard">
      <IconComponent
        :сonfig="{
          name: 'dashboardIcon',
          color: isActive('/dashboard') ? '#01A254' : '#23362D4D',
          width: 24,
          height: 24,
        }"
      >
      </IconComponent>
    </router-link>

    <router-link to="/map">
      <IconComponent
        :сonfig="{
          name: 'mapIcon',
          color: isActive('/map') ? '#01A254' : '#23362D4D',
          width: 24,
          height: 24,
        }"
      >
      </IconComponent>
    </router-link>

    <router-link to="/applications">
      <IconComponent
        :сonfig="{
          name: 'assignmentIcon',
          color: isActive('/applications') ? '#01A254' : '#23362D4D',
          width: 24,
          height: 24,
        }"
      >
      </IconComponent>
    </router-link>

    <router-link to="/delivery">
      <IconComponent
        :сonfig="{
          name: 'peopleIcon',
          color: isActive('/delivery') ? '#01A254' : '#23362D4D',
          width: 24,
          height: 24,
        }"
      >
      </IconComponent>
    </router-link>

    <router-link to="/transport">
      <IconComponent
        :сonfig="{
          name: 'carIcon',
          color: isActive('/transport') ? '#01A254' : '#23362D4D',
          width: 24,
          height: 24,
        }"
      >
      </IconComponent>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import IconComponent from '../components/global/icon/icon.component.vue';
// import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isActive = (path: string): boolean => {
  return route.path === path;
};
</script>

<style>
.navbar {
  position: fixed;
  top: 70px;
  left: 0;
  border: 1px solid rgba(35, 54, 45, 0.12);
  background-color: #fff;
  bottom: 0;
  width: 72px;
  color: white;
  padding: 70px 24px 24px 24px;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  align-self: stretch;
}

/* .router-link-active {
  background-color: #666;
} */
</style>
