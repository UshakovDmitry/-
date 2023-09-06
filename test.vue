    <div class="wrapper-toggle-btns">
      <div
        class="wrapper-toggle-btns-item"
        :class="{ isActiveTab: model.isTransport === true }"
        @click="viewModel.setTransport()"
      >
        Транспорт
      </div>
      <div
        class="wrapper-toggle-btns-item"
        :class="{ isActiveTab: model.isLoaders === true }"
        @click="viewModel.setLoaders()"
      >
        Грузчики
      </div>
    </div>





.wrapper-toggle-btns {
  width: 394px;
  height: 44px;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
}
.wrapper-toggle-btns-item {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.isActiveTab {
  color: var(--primary-light-mode-main, #00a153);
  border-bottom: 3px solid var(--primary-light-mode-main, #00a153);
}
