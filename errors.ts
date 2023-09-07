<template>
  <div class="input-wrap" >
    <input :id="props.id" type="checkbox" :checked="isActive" />
    <label :for="props.id" :class="{ active: props.isActive }">Select</label>
  </div>
</template>

<script setup lang="ts">
// import { ref } from 'vue';

const props = defineProps<{
  id: number;
  isActive?: boolean;
}>();


</script>

<style scoped>
.input-wrap {
  position: relative;

  width: 45px;
  display: flex;
  align-items: center;
  justify-content: center;  
}

label {
  display: inline-block;
  position: relative;
  /* высота области таба */
  height: 18px;
  /* ширина области таба */
  width: 30px;
  background-color: #bdc3c0;
  cursor: pointer;
  font-size: 0;
  color: transparent;
  border-radius: 17px;  
  line-height: 30px;
  vertical-align: middle;
  transition: background-color 500ms ease;
}

label::after {
  content: '';
  display: block;
  height: 14px;
  width: 14px;
  position: absolute;
  top: 2px;
  /* смещение таба вправо */
  right: 15px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 2px 0px 0px rgba(0, 0, 0, 0.15);
  transition: right 500ms ease, background-color 500ms ease, box-shadow 500ms ease;
}

label.active {
  background: #2f975c;
}

label.active::after {
  right: 2px;
  background-color: #fff;
  box-shadow: -2px 0px 0px rgba(0, 0, 0, 0.1);
}

input {
  position: absolute !important;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  bottom: 0;
}
</style>



src/components/global/toggle/toggle.vue:3:12 - error TS2322: Type 'number' is not assignable to type 'string'.

3     <input :id="props.id" type="checkbox" :checked="isActive" />
             ~~~

  node_modules/@vue/runtime-dom/dist/runtime-dom.d.ts:328:5
    328     id?: string;
            ~~
    The expected type comes from property 'id' which is declared here on type 'InputHTMLAttributes & ReservedProps & Record<string, unknown>'

src/components/global/toggle/toggle.vue:4:12 - error TS2322: Type 'number' is not assignable to type 'string'.

4     <label :for="props.id" :class="{ active: props.isActive }">Select</label>
             ~~~~

  node_modules/@vue/runtime-dom/dist/runtime-dom.d.ts:540:5
    540     for?: string;
            ~~~
    The expected type comes from property 'for' which is declared here on type 'LabelHTMLAttributes & ReservedProps & Record<string, unknown>'


Found 2 errors in the same file, starting at: src/components/global/toggle/toggle.vue:3

PS C:\Users\ushakov.dmitriy\Desktop\Projects\alser.dispatcherworkplaceui\frontend>

Argument of type '{ id: number; type: string; checked: boolean | undefined; }' is not assignable to parameter of type 'InputHTMLAttributes & ReservedProps & Record<string, unknown>'.
  Type '{ id: number; type: string; checked: boolean | undefined; }' is not assignable to type 'InputHTMLAttributes'.ts(2345)
(property) input: InputHTMLAttributes & ReservedProps
The input element represents a typed data field, usually with a form control to allow the user to edit the data.


Argument of type '{ for: number; class: { active: boolean; }; }' is not assignable to parameter of type 'LabelHTMLAttributes & ReservedProps & Record<string, unknown>'.
  Type '{ for: number; class: { active: boolean; }; }' is not assignable to type 'LabelHTMLAttributes'.ts(2345)
(property) label: LabelHTMLAttributes & ReservedProps
The label element represents a caption in a user interface. The caption can be associated with a specific form control, known as the label element's labeled control, either using the for attribute, or by putting the form control inside the label element itself.
