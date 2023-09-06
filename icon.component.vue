<!-- eslint-disable camelcase -->
<!-- eslint-disable camelcase -->
<!-- eslint-disable camelcase -->
<!-- eslint-disable camelcase -->
<template>
  <IconContainer></IconContainer>
</template>

<script setup lang="ts">
import { h, Component } from 'vue';
import dashboardIcon from '../icons-collection/dashboard.icon.vue';
import mapIcon from '../icons-collection/map.icon.vue';
import assignmentIcon from '../icons-collection/assignment.icon.vue';
import peopleIcon from '../icons-collection/people.icon.vue';
import carIcon from '../icons-collection/car.icon.vue';
import visibility from '../icons-collection/visibility.icon.vue';
import visibility_off from '../icons-collection/visibility_off.icon.vue';
import location from '../icons-collection/location.icon.vue';
import expand_more from '../icons-collection/expand-more.icon.vue';
import search from '../icons-collection/search.icon.vue';
import keyboardLeft from '../icons-collection/keyboard-left.icon.vue';
import keyboardRight from '../icons-collection/keyboard-right.icon.vue';
import doubleArrowLeft from '../icons-collection/double-arrow-left.icon.vue';
import doubleArrowRight from '../icons-collection/double-arrow-right.icon.vue';
import sortIcon from '../icons-collection/sort.icon.vue';

export interface IIcon {
  name: string;
  color: string;
  colorLoading?: string;
  width?: number;
  height?: number;
  scale?: number;
  isDisabled?: boolean;
  isLoading?: boolean;
  viewBox?: string | undefined;
}

const props = defineProps<{
  сonfig: IIcon;
}>();

const emits = defineEmits(['onClick']);

const listIcons: { [key: string]: any } = {
  //Navbar
  dashboardIcon,
  mapIcon,
  assignmentIcon,
  peopleIcon,
  carIcon,
  //for fields
  visibility,
  visibility_off,
  location,
  // dropdown стрелка вниз
  expand_more,
  search,
  // paginator
  keyboardLeft,
  keyboardRight,
  doubleArrowLeft,
  doubleArrowRight,
  sortIcon

};

const IconContainer: Component = () => {
  return h(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      role: 'presentation',
      width: props.сonfig?.width || 18,
      height: props.сonfig?.height || 18,
      viewBox: props.сonfig?.viewBox || '0 0 24 24',
      style: `transform: scale(${props.сonfig?.scale})`,
      onClick: () => {
        emits('onClick');
      },
    },
    [
      h('title', { lang: 'en' }),
      h(
        'g',
        {
          fill: props.сonfig?.isDisabled
            ? `var(--dark-30)`
            : props.сonfig?.isLoading
            ? props.сonfig?.colorLoading
              ? `var(--${props.сonfig?.colorLoading})`
              : 'transparent'
            : props.сonfig?.color,
        },
        h(listIcons[props.сonfig.name]),
      ),
    ],
  );
};
</script>







//// with rotate


<template>
  <IconContainer></IconContainer>
</template>

<script setup lang="ts">
import { h, Component } from 'vue';
// ... (ваши импорты)

export interface IIcon {
  name: string;
  color: string;
  colorLoading?: string;
  width?: number;
  height?: number;
  scale?: number;
  isDisabled?: boolean;
  isLoading?: boolean;
  viewBox?: string | undefined;
  rotate?: number; // Добавьте эту строку
}

const props = defineProps<{
  сonfig: IIcon;
}>();

const emits = defineEmits(['onClick']);

// ... (список иконок)

const IconContainer: Component = () => {
  return h(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      role: 'presentation',
      width: props.сonfig?.width || 18,
      height: props.сonfig?.height || 18,
      viewBox: props.сonfig?.viewBox || '0 0 24 24',
      style: `
        transform: scale(${props.сonfig?.scale}) rotate(${props.сonfig?.rotate || 0}deg);
      `, // Добавьте rotate здесь
      onClick: () => {
        emits('onClick');
      },
    },
    [
      h('title', { lang: 'en' }),
      h(
        'g',
        {
          fill: props.сonfig?.isDisabled
            ? `var(--dark-30)`
            : props.сonfig?.isLoading
            ? props.сonfig?.colorLoading
              ? `var(--${props.сonfig?.colorLoading})`
              : 'transparent'
            : props.сonfig?.color,
        },
        h(listIcons[props.сonfig.name]),
      ),
    ],
  );
};
</script>

