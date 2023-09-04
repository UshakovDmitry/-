<template>
  <div class="dropdown">
    <div class="dropdown__header">
      <div class="dropdown__btn" @click="toggle">
        <p>
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
    <transition name="fade">
      <div
        v-if="isOpened"
        class="dropdown__body"
        :style="{ width: width + 'px' }"
      >
        <ul class="dropdown__list">
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

const props = defineProps<{
  items: string[];
  width: number;
  currentValue: string;
}>();

const emits = defineEmits(['onToggle', 'onSelect']);

const isOpened = ref(false);

const toggle = () => {
  isOpened.value = !isOpened.value;
  emits('onToggle');
};

const selectItem = (item: string) => {
  emits('onSelect', item);
};
</script>

<style scoped>
  /* Здесь ваши CSS стили */
</style>

