<template>
  <section class="auth">
    <div class="auth__content">
      <img :src="logo" alt="logo" />
     
      <ButtonComponent
        :config="{
          value: 'Войти',
          type: 'filled',
          color: 'green',
          border: 'large',
          loading: false,
          disabled: false,
          width: '100%',

        }"
        @input="console.log('click')"
      ></ButtonComponent>
    </div>
  </section>
</template>
<script setup lang="ts">
import logo from '../../public/icons/logo.svg';
import ButtonComponent from '../../components/global/button/button.vue';


</script>
<style scoped lang="scss">
.auth {
  max-width: 100vw;
  height: 100vh;
  background: linear-gradient(108deg, #01a254 0%, #50d17f 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -72px;
  margin-top: -107px;
}
.auth__content {
  display: flex;
  width: 420px;
  padding: 36px;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  flex-shrink: 0;
  border-radius: 16px;
  background: #fff;
}
</style>

