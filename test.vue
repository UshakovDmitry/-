<template>
  <div class="pagination">
    <button
      :disabled="currentPage === 1"
      @click="changePage(currentPage - 1)"
    >
      Previous
    </button>

    <span>Page {{ currentPage }} of {{ totalPages }}</span>

    <button
      :disabled="currentPage === totalPages"
      @click="changePage(currentPage + 1)"
    >
      Next
    </button>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";

const props = defineProps({
  totalPages: Number,
  initialPage: {
    type: Number,
    default: 1,
  },
});

const currentPage = ref(props.initialPage);

const emits = defineEmits(["page-change"]);

const changePage = (newPage) => {
  if (newPage >= 1 && newPage <= props.totalPages) {
    currentPage.value = newPage;
    emits("page-change", newPage);
  }
};
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>



























<template>
  <div>
    <!-- Ваша таблица данных здесь -->

    <Pagination
      :total-pages="totalPages"
      :initial-page="1"
      @page-change="handlePageChange"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Pagination from "./Pagination.vue"; // Путь к вашему компоненту пагинации

const totalPages = ref(10); // Замените на ваше реальное количество страниц

const handlePageChange = (newPage) => {
  // Здесь ваш код для обновления текущей страницы данных
};
</script>
