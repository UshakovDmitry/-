<template>
  <!-- Контейнер для поля поиска -->
  <div class="search-container">
    <!-- Поле ввода -->
    <input
      type="text"
      :value="searchValue"
      @input="updateSearch"
      placeholder="Введите запрос..."
      class="search-input"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Определяем эмиттеры для событий
const emits = defineEmits(['onSearch']);

// Состояние для хранения значения поля поиска
const searchValue = ref('');

// Функция для обновления значения поиска
const updateSearch = (event: Event) => {
  // Получаем текущее значение из поля ввода
  const value = (event.target as HTMLInputElement).value;
  
  // Обновляем локальное состояние
  searchValue.value = value;
  
  // Эмитим событие с новым значением для родительского компонента
  emits('onSearch', value);
};
</script>

<style scoped>
  .search-container {
    /* Стили для контейнера */
  }

  .search-input {
    /* Стили для поля ввода */
    border-radius: 16px;
    background: #f2f3f5;
    padding: 12px 16px;
    font-size: 14px;
    border: none;
    outline: transparent;
    color: hsl(152, 21%, 17%);
    width: 100%;
  }
</style>
