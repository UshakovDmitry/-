
<!-- eslint-disable vue/valid-v-model -->
<!-- eslint-disable vue/no-mutating-props -->
<!-- eslint-disable vue/require-v-for-key -->
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

//   const searchBrand: Ref<any> = ref("");
//   const searchCategory: Ref<any> = ref("");

//   const fiteredCategories = computed(() => {
//     // @ts-ignore
//     return props.items.filter((item: ICategory) =>
//       item.name.toLowerCase().includes(searchCategory.value.toLowerCase())
//     );
//   });

//   const filteredBrands = computed(() => {
//     // @ts-ignore
//     return props.items.filter((item: IBrand) =>
//       item.brand_name.toLowerCase().includes(searchBrand.value.toLowerCase())
//     );
//   });
</script>

<style scoped lang="scss">
.search-input {
  border-radius: 16px;
  background: var(--secondary-light-mode-grey, #f2f3f5);
  padding: 12px 0px 12px 8px;
  height: 34px;
  border: none;
  outline: transparent;
  color: hsl(152, 21%, 17%);
  width: 95%;
  font-size: 14px;
  margin-left: 10px;
  margin-bottom: 5px;
  @media screen and (max-width: 768px) {
    height: 34px;
  }
}
.dropdown {
  position: relative;
  &__btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 80px;
    width: 280px;
    height: 34px;
    background: var(--secondary-light-mode-grey, #f2f3f5);
    border: 1px solid var(--tertiary-light-mode-border, rgba(35, 54, 45, 0.12));
    color: var(--text-dark, #23362d);
    text-align: center;
    font-size: 14px;
    user-select: none;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.4px;
    cursor: pointer;
    padding: 8px 8px 8px 16px;
    transition: all 0.3s ease 0s;
  }
  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    transform: rotate(0deg);
    transition: transform 0.3s ease 0s;
    i {
      font-size: 18px;
    }
    &._open {
      transform: rotate(-180deg);
    }
  }
  &__body {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 100;
    background-color: var(--white);
    box-shadow:
      0 6px 10px 4px rgba(204, 204, 204, 0.15),
      0 2px 3px rgba(204, 204, 204, 0.3);
    border-radius: 16px;
    padding: 16px 0;
    overflow-x: auto;
    height: 500px;
    scroll-behavior: smooth;
    overflow-x: hidden; /*для горизонтального*/
  }
  &__name {
    display: flex;
    justify-content: space-between;
  }
}

.dropdown-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  color: var(--black);
  cursor: pointer;
  transition: all 0.3s ease 0s;
  &__name {
    font-weight: 400;
    font-size: 14px;
    line-height: 143%;
    letter-spacing: 0.25px;
  }
  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    width: 18px;
    height: 18px;
  }
  &.active {
    background: rgba(0, 161, 83, 0.04);
    pointer-events: none;
  }
  &:hover {
    background: rgba(35, 54, 45, 0.08);
  }
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

