PS C:\Users\ushakov.dmitriy\Desktop\Projects\alser.dispatcherworkplaceui\frontend> npm run build

> alser.dispatcherworkplaceui@0.0.0 build
> vue-tsc && vite build

error TS6504: File 'C:/Users/ushakov.dmitriy/Desktop/Projects/alser.dispatcherworkplaceui/frontend/src/views/dashboard/dashboard.component.vue.js' is a JavaScript file. Did you mean to enable the 'allowJs' option?
  The file is in the program because:
    Root file specified for compilation

error TS6504: File 'C:/Users/ushakov.dmitriy/Desktop/Projects/alser.dispatcherworkplaceui/frontend/src/views/map/map.component.vue.js' is a JavaScript file. Did you mean to enable the 'allowJs' option?
  The file is in the program because:
    Root file specified for compilation


Found 2 errors.

PS C:\Users\ushakov.dmitriy\Desktop\Projects\alser.dispatcherworkplaceui\frontend>
  
dashboard.component
<template>
  <section class="dashboard">
    <p>Главная страница</p>

  </section>
</template>
<script setup land="ts"></script>
<style>
.dashboard {
  padding: 0 20px;
  width: 100%;
  height: 100vh;
  background-color: #f2f7fb;
  box-sizing: border-box;

}
</style>


 map.component
 <template>
<section class="map">
    <p>Страница Карта</p>
</section>
</template>
<script setup land="ts">
</script>
<style>
.map {
    padding: 0 20px;
    width: 100%;
    height: 100vh;
    background-color: #f2f7fb;
    box-sizing: border-box;

    }
</style>
