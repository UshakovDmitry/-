 <Pagination
      :total-pages="totalPages"
      :initial-page="1"
      @page-change="handlePageChange"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, defineProps, defineEmits } from 'vue';
import Pagination from './Pagination.vue'; // Путь к вашему компоненту пагинации
import cellTypeToggle from '../global/cell-collection/cellTypeToggle.vue';
import cellTypeSimple from '../global/cell-collection/cellTypeSimple.vue';

const props = defineProps<{
  headers: string[];
  rows: any[];
  config: any;
}>();

const itemsPerPage = ref(5); // Количество элементов на странице
const currentPage = ref(1); // Текущая страница

const totalPages = computed(() => Math.ceil(props.rows.length / itemsPerPage.value));

const paginatedRows = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return props.rows.slice(start, end);
});

const handlePageChange = (newPage: number) => {
  currentPage.value = newPage;
};





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
