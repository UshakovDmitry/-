      <VueDatePicker
        v-model="date"
        locale="ru"
        range
        :placeholder="'Выберите дату'"
        class="date_picker"
      ></VueDatePicker>



      .date_picker {
  --dp-cell-border-radius: 16px; /*Specific border radius for the calendar cell*/
  width: 200px;
}
