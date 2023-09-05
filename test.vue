<div class="page-btn" @click="goToFirstPage">
  <IconComponent
    :сonfig="{
      name: 'doubleLeft', // Имя вашей иконки для "Первая страница"
      color: '#23362D4D',
      width: 24,
      height: 24,
    }"
  ></IconComponent>
</div>

<!-- Ваши текущие кнопки -->

<div class="page-btn" @click="goToLastPage">
  <IconComponent
    :сonfig="{
      name: 'doubleRight', // Имя вашей иконки для "Последняя страница"
      color: '#23362D4D',
      width: 24,
      height: 24,
    }"
  ></IconComponent>
</div>




const goToFirstPage = () => {
  goToPage(1);
};

const goToLastPage = () => {
  goToPage(props.totalPages);
};
