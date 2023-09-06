<template>
  <div class="dropdown">
    <div class="dropdown__header" >
      <div class="dropdown__btn" data-test="dropdown-btn" @click="toggle">
        <IconComponent
          :сonfig="{
            name: 'location',
            color: '#23362D4D',
            width: 24,
            height: 24,
          }"
        ></IconComponent>
        <p>
          {{ currentValue.length ? currentValue : 'Выберите город' }}
        </p>
        <div>
          <IconComponent
            :сonfig="{
              name: 'expand_more',
              color: '#23362D4D',
              width: 24,
              height: 24,
            }"
          ></IconComponent>
        </div>
      </div>
    </div>
    <!-- Анимация при открытии/закрытии -->
    <transition name="fade">
      <!-- Отображаем список городов, если переменная isOpened истинна -->
      <div v-if="isOpened" data-test="dropdown-body" class="dropdown__body" :style="{ width: width + 'px' }">
        <ul class="dropdown__list">
          <!-- Проходим по каждому городу в списке и отображаем его -->
          <li
            v-for="item in items"
            :key="item"
            class="dropdown__item"
            @click="selectItem(item)"
          >
            <div class="dropdown__item__name">
              {{ item }}
            </div>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>
