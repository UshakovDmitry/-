<template>
  <div class="dropdown">
    <!-- Шапка выпадающего списка -->
    <div class="dropdown__header">
      <div class="dropdown__btn" @click="toggle">
        <p>
          <!-- Отображаем выбранный город или фразу "Выберите город", если город не выбран -->
          {{ currentValue.length ? currentValue : 'Выберите город' }}
        </p>
        <div>
          <IconComponent
            :сonfig="{
              name: 'arrow_forward',
              color: 'var(--black)',
              scale: 1
            }"
          ></IconComponent>
        </div>
      </div>
    </div>
    <!-- Анимация при открытии/закрытии -->
    <transition name="fade">
      <!-- Отображаем список городов, если переменная isOpened истинна -->
      <div v-if="isOpened" class="dropdown__body" :style="{ width: width + 'px' }">
        <ul class="dropdown__list">
          <!-- Проходим по каждому городу в списке и отображаем его -->
          <li
            v-for="item in items"
            :key="item"
            class="dropdown__item"
            @click="selectItem(item)"
          >
            <div class="dropdown-item__name">
              {{ item }}
            </div>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import IconComponent from '../../../components/global/icon/icon.component.vue';

// Определяем пропсы
const props = defineProps<{
  items: string[];
  width: number;
}>();

// Определяем эмиттеры для событий
const emits = defineEmits(['onToggle', 'onSelect']);

// Состояние для открытия/закрытия выпадающего списка
const isOpened = ref(false);

// Текущий выбранный город
const currentValue = ref('');

// Функция для открытия/закрытия списка
const toggle = () => {
  isOpened.value = !isOpened.value;
  emits('onToggle');
};

// Функция для выбора города
const selectItem = (item: string) => {
  // Задаем текущий выбранный город
  currentValue.value = item;
  
  // Закрываем выпадающий список
  isOpened.value = false;
  
  // Эмитим событие с выбранным элементом
  emits('onSelect', item);
};
</script>

<style scoped>
  /* Ваши CSS стили */
</style>

