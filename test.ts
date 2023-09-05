<template>
  <div class="pagination">
    <div class="page-btn" @click="goToPrevPage">
      <IconComponent
        :сonfig="{
          name: 'keyboardLeft',
          color: '#23362D4D',
          width: 24,
          height: 24,
        }"
      ></IconComponent>
    </div>

    <button
      v-for="page in totalPages"
      :key="page"
      class="page-btn"
      @click="goToPage(page)"
      :class="{ active: currentPage === page }"
    >
      {{ page }}
    </button>

    <div class="page-btn" @click="goToNextPage">
      <IconComponent
        :сonfig="{
          name: 'keyboardRight',
          color: '#23362D4D',
          width: 24,
          height: 24,
        }"
      ></IconComponent>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import IconComponent from '../icon/icon.component.vue';

const props = defineProps<{
  totalPages: number;
  initialPage: number;
}>();

const emit = defineEmits<{
  (e: 'page-change', value: number): void;
}>();

const currentPage = ref(props.initialPage);

const goToPage = (page: number) => {
  currentPage.value = page;
  emit('page-change', page);
};

const goToPrevPage = () => {
  if (currentPage.value > 1) {
    goToPage(currentPage.value - 1);
  }
};

const goToNextPage = () => {
  if (currentPage.value < props.totalPages) {
    goToPage(currentPage.value + 1);
  }
};
</script>

<style scoped>
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
.page-btn {
  display: flex;
  width: 34px;
  height: 34px;
  padding: 4px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 80px;
  outline: none;
  border: none;
  color: var(--text-dark, #23362d);
  text-align: center;
  font-family: Rubik;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px; /* 120% */
  letter-spacing: 0.5px;
  cursor: pointer;
  /* border: 1px solid #813909; */
}

button.active {
  border-radius: 80px;
  background: var(--overlay-activated, rgba(0, 161, 83, 0.12));
  color: var(--primary-light-mode-dark, #006f39);
  text-align: center;

}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>

