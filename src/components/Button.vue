<template>
  <div
    class="relative"
    :class="{
      'h-12 w-36 text-lg': size === 'md',
      'h-14 w-48 text-xl': size === 'big',
    }"
  >
    <button
      class="self-center rounded-lg bg-gradient-to-b text-white shadow hover:shadow-lg"
      :class="{
        'h-12 w-36 text-lg': size === 'md',
        'h-14 w-48 text-xl': size === 'big',
        ' from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 dark:from-purple-500 dark:to-purple-600':
          look === 'primary',
        'from-blue-500 to-blue-600': look === 'secondary',
        'from-red-500 to-red-600': look === 'danger',
      }"
    >
      <span v-if="!loading">{{ text }}</span>
      <span v-else>Caricamento...</span>
    </button>
    <div
      v-show="loading"
      class="absolute top-0"
      :class="{
        'rounded-lg bg-black text-white opacity-10': loading,
        'text-md h-12 w-36': size === 'md',
        'h-14 w-48 text-lg': size === 'big',
      }"
    ></div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const buttonRef = ref();
const props = defineProps({
  look: {
    type: String,
    // validator(value) {
    //   // The value must match one of these strings
    //   return ["primary", "secondary", "danger"].includes(value);
    // },
  },
  loading: {
    type: Boolean,
    default: false,
  },
  text: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: "md",
    // validator(value) {
    //   // The value must match one of these strings
    //   return ["md", "big"].includes(value);
    // },
  },
});
</script>

<style lang="scss" scoped></style>
