<template>
  <div class="navbar">
    <router-link to="/dashboard">
      <IconComponent
        :сonfig="{
          name: 'dashboardIcon',
          color: isActive ? '#01A254' : '#23362D4D',
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
          color: isActive ? '#01A254' : '#23362D4D',
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
          color: isActive ? '#01A254' : '#23362D4D',
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
          color: isActive ? '#01A254' : '#23362D4D',
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
          color: isActive ? '#01A254' : '#23362D4D',
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
