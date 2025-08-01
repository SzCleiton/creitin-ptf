<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['buttonClick']);

function handleClick() {
  emit('buttonClick');
}
</script>

<template>
  <button
    @click="handleClick"
    :disabled="props.disabled"
    class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 disabled:bg-gray-400"
  >
    {{ props.text }}
  </button>
</template>