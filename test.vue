<template>
  <section class="auth">
    <div class="auth__content">
      <img :src="logo" alt="logo" />
      <!-- <emailField
        :config="{
          input: {
            type: 'email',
            placeholder: 'Введите email',
            value: '',
            isError: false,
            isDisabled: false,
            required: true,
          },
          helper: {
            value: 'Пожалуйста, введите email',
            isActive: false,
          },
        }"
      ></emailField> -->
      <!-- <passwordField
        :config="{
          input: {
            type: 'password',
            placeholder: 'Введите пароль',
            value: '',
            isError: false,
            isDisabled: false,
            required: true,
          },
          helper: {
            value: 'Пожалуйста, введите пароль',
            isActive: false,
          },
        }">
        </passwordField> -->
      <ButtonComponent
        :config="{
          value: 'Войти',
          type: 'filled',
          color: 'green',
          border: 'large',
          loading: false,
          disabled: false,
          width: '100%',
          // hideText: false,
          // mobileWidth: false,
          // prefix: '',
          // suffix: '',
          // iconColor: '',
          // border: '',
        }"
        @input="console.log('click')"
      ></ButtonComponent>
    </div>
  </section>
</template>
<script setup lang="ts">
import logo from '../../public/icons/logo.svg';
import ButtonComponent from '../../components/global/button/button.vue';
// import emailField from '../../components/global/fields/email-field/email-field.vue';
// import passwordField from '../../components/global/fields/password-field/password-field.vue';


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

