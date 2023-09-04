<template>
  <div class="table-wrapper">
    <table class="table-component" v-if="props.rows.length >= 1">
      <thead>
        <tr class="table-thead-tr">
          <th
            class="table-staff-thead-tr-th"
            v-for="(header, index) in props.headers"
          >
     {{ header  }}
     
          </th>
        </tr>
      </thead>
      <tbody>
        <tr 
        class="table-staff-tbody-tr" 
        v-for="(row, rowIndex) in props.rows" 
        :key="rowIndex">

          <td 
          v-for="(cell, cellIndex, i) in row"
           :key="cellIndex"
            class="table-staff-tbody-tr-td"
          >
        <cell-type-toggle
        v-if="props.config.rows[i].config.type === 2"
        :config="{...props.config.rows[i].config,value: cell ,id: i}"
        ></cell-type-toggle>
        <cell-type-simple
        v-if="props.config.rows[i].config.type === 1"
        :config="{...props.config.rows[i].config,value: cell ,id: i}"
        ></cell-type-simple>
        </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import cellTypeToggle from '../global/cell-collection/cellTypeToggle.vue';
import cellTypeSimple from '../global/cell-collection/cellTypeSimple.vue';

const props = defineProps<{
  headers: string[];
  rows: any[];
  config: any;
}>();


const emit = defineEmits([
  'addExperience',
  'isModalAddStaffActive',
  'isModalEditStaffActive',
  'editKPI',
  'deleteExperience',
  'setDataForStaffModalEdit',
]);
</script>

<style scoped>
::-webkit-scrollbar {
  width: 10px; /* ширина для вертикального скролла */
  height: 10px; /* высота для горизонтального скролла */
  background-color: white;
  border-radius: 16px;
}
::-webkit-scrollbar-thumb {
  background-color: #c4c9c6;
  border-radius: 16px;
}
.table-wrapper {
  position: sticky;
  top: 0;
  white-space: nowrap;
  position: relative;
  overflow-y: auto;
  width: 100%;
  height: auto;
}

.table-component {
  border-collapse: collapse;
  background-color: white;
  width: 100%;
  height: 100%;
}
thead {
  position: sticky;
  top: 0;
}
.table-thead-tr {
  position: sticky;
  top: 0;
  padding-right: 20px;
  height: 46px;
  border-bottom: 1px solid #e4e7e5;
  background-color: #F1F7F4 ;
}


.alser-table-header {
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #23362d;
}



.sort-icon {
  cursor: pointer;
  margin: 5px;
}

.table-staff-thead-tr-th {
    padding: 10px 20px;
    text-align: left;

}
.table-staff-tbody-tr-td {
    padding: 10px 20px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #23362d;
    border-bottom: 1px solid #e4e7e5;
    text-align: left;
}

</style>

