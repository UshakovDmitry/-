<template>
  <!-- Контейнер для поля поиска и иконки -->
  <div class="search-container">
    <div class="icon-wrapper">
      <IconComponent
        :сonfig="{
          name: 'search',
          color: '#23362D4D',
          width: 24,
          height: 24,
        }"
      ></IconComponent>
    </div>
    <!-- Поле ввода -->
    <input
      type="text"
      :value="searchValue"
      @input="updateSearch"
      :placeholder="props.placeholder"
      class="search-input"
    />
  </div>
</template>

<style scoped>
.search-container {
  /* Расположение иконки и поля ввода в одной строке */
  display: flex;
  align-items: center;
  position: relative;
}

.icon-wrapper {
  /* Позиционирование иконки внутри поля ввода */
  position: absolute;
  left: 16px; /* Расстояние от левого края поля ввода */
  z-index: 1; /* Поверх поля ввода */
}

.search-input {
  /* Стили для поля ввода */
  border-radius: 16px;
  background: #f2f3f5;
  padding: 12px 16px;
  padding-left: 40px; /* Добавляем отступ слева, чтобы текст не перекрывал иконку */
  font-size: 14px;
  border: none;
  outline: transparent;
  color: hsl(152, 21%, 17%);
  width: 100%;
  position: relative;
  z-index: 0; /* Под иконкой */
}
</style>
