<template>
  <div class="pagination">
    <button @click="goToPrevPage" :disabled="currentPage === 1">Назад</button>

    <button
      v-for="page in totalPages"
      :key="page"
      @click="goToPage(page)"
      :class="{ active: currentPage === page }"
    >
      {{ page }}
    </button>

    <button @click="goToNextPage" :disabled="currentPage === totalPages">Вперед</button>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue';

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
  gap: 1rem;
}

button {
  padding: 0.5rem 1rem;
  cursor: pointer;
  border: none;
  background-color: #f1f1f1;
}

button.active {
  background-color: green;
  color: white;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
