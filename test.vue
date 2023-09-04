
<template>
  <div class="dropdown">
    <div class="dropdown__header">
      <div class="dropdown__btn" @click="() => emits('onToggle')">
        <p>
          {{ currentValue.length ? currentValue : 'Выберите город' }}
        </p>
        <div>
          <IconComponent
            :сonfig="{
              name: 'arrow_forward',
              color: 'var(--black)',
              scale: 1,
            }"
          ></IconComponent>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div
        v-if="isOpened"
        class="dropdown__body"
        :style="{ width: width + 'px' }"
      >
        <form class="search-input-container"></form>
        <ul class="dropdown__list">
          <li
            v-for="item in items"
            class="dropdown__item dropdown-item"
            :class="{ active: item }"
            @click="
              () => {
                emits('onSelect', item);
              }
            "
          >
            <div class="dropdown-item__name">
              {{ item }}
            </div>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import IconComponent from '../../../components/global/icon/icon.component.vue';
 defineProps<{
  items: any[];
  isOpened: boolean;
  width: number;
  currentValue: string;
}>();

const emits = defineEmits(['onToggle', 'onSelect']);

</script>

<style scoped lang="scss">
.search-input {
  border-radius: 16px;
  background: #f2f3f5;
  padding: 12px 0px 12px 8px;
  height: 34px;
  border: none;
  outline: transparent;
  color: hsl(152, 21%, 17%);
  width: 95%;
  font-size: 14px;
  margin-left: 10px;
  margin-bottom: 5px;
}

.dropdown {
  position: relative;
}

.dropdown__btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 80px;
  width: 280px;
  height: 34px;
  background: #f2f3f5;
  border: 1px solid rgba(35, 54, 45, 0.12);
  color: #23362d;
  text-align: center;
  font-size: 14px;
  user-select: none;
  padding: 8px 8px 8px 16px;
  transition: all 0.3s ease 0s;
}

.dropdown__body {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 100;
  background-color: white;
  box-shadow: 0 6px 10px 4px rgba(204, 204, 204, 0.15), 0 2px 3px rgba(204, 204, 204, 0.3);
  border-radius: 16px;
  padding: 16px 0;
  overflow-x: auto;
  height: 500px;
  scroll-behavior: smooth;
}

.dropdown-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  color: black;
  cursor: pointer;
  transition: all 0.3s ease 0s;
}

.dropdown-item.active {
  background: rgba(0, 161, 83, 0.04);
  pointer-events: none;
}

.dropdown-item:hover {
  background: rgba(35, 54, 45, 0.08);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
