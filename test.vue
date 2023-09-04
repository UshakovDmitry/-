this.transport = [
      {
        model: 'Mercedes-Benz',
        number: 'A 123 AA 77',
        type: 'Газель',
        volume: '4.5',
        loadCapacity: '1.5',
        city: 'Москва',
        isActive: true,
        shedule: 'Пн-Пт 9:00-18:00',
        hasDriver: true,
      },
      {
        model: 'Mercedes-Benz',
        number: 'A 123 AA 77',
        type: 'Газель',
        volume: '4.5',
        loadCapacity: '1.5',
        city: 'Москва',
        isActive: true,
        shedule: 'Пн-Пт 9:00-18:00',
        hasDriver: true,
      },
      {
        model: 'Mercedes-Benz',
        number: 'A 123 AA 77',
        type: 'Газель',
        volume: '4.5',
        loadCapacity: '1.5',
        city: 'Москва',
        isActive: true,
        shedule: 'Пн-Пт 9:00-18:00',
        hasDriver: true,
      },
      {
        model: 'Mercedes-Benz',
        number: 'A 123 AA 77',
        type: 'Газель',
        volume: '4.5',
        loadCapacity: '1.5',
        city: 'Москва',
        isActive: true,
        shedule: 'Пн-Пт 9:00-18:00',
        hasDriver: true,
      },
      {
        model: 'Mercedes-Benz',
        number: 'A 123 AA 77',
        type: 'Газель',
        volume: '4.5',
        loadCapacity: '1.5',
        city: 'Москва',
        isActive: true,
        shedule: 'Пн-Пт 9:00-18:00',
        hasDriver: true,
      },
      {
        model: 'Mercedes-Benz',
        number: 'A 123 AA 77',
        type: 'Газель',
        volume: '4.5',
        loadCapacity: '1.5',
        city: 'Москва',
        isActive: true,
        shedule: 'Пн-Пт 9:00-18:00',
        hasDriver: true,
      },
      {
        model: 'Mercedes-Benz',
        number: 'A 123 AA 77',
        type: 'Газель',
        volume: '4.5',
        loadCapacity: '1.5',
        city: 'Москва',
        isActive: true,
        shedule: 'Пн-Пт 9:00-18:00',
        hasDriver: true,
      },
      {
        model: 'Mercedes-Benz',
        number: 'A 123 AA 77',
        type: 'Газель',
        volume: '4.5',
        loadCapacity: '1.5',
        city: 'Москва',
        isActive: true,
        shedule: 'Пн-Пт 9:00-18:00',
        hasDriver: true,
      },
      {
        model: 'Mercedes-Benz',
        number: 'A 123 AA 77',
        type: 'Газель',
        volume: '4.5',
        loadCapacity: '1.5',
        city: 'Москва',
        isActive: true,
        shedule: 'Пн-Пт 9:00-18:00',
        hasDriver: true,
      },
      {
        model: 'Mercedes-Benz',
        number: 'A 123 AA 77',
        type: 'Газель',
        volume: '4.5',
        loadCapacity: '1.5',
        city: 'Москва',
        isActive: true,
        shedule: 'Пн-Пт 9:00-18:00',
        hasDriver: true,
      },
      {
        model: 'Mercedes-Benz',
        number: 'A 123 AA 77',
        type: 'Газель',
        volume: '4.5',
        loadCapacity: '1.5',
        city: 'Москва',
        isActive: true,
        shedule: 'Пн-Пт 9:00-18:00',
        hasDriver: true,
      },
      {
        model: 'Mercedes-Benz',
        number: 'A 123 AA 77',
        type: 'Газель',
        volume: '4.5',
        loadCapacity: '1.5',
        city: 'Москва',
        isActive: true,

        shedule: 'Пн-Пт 9:00-18:00',
        hasDriver: true,
      },
    ];

















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
