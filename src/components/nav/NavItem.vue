<template>
  <router-link custom v-slot="{isActive, router, isExactActive, navigate}" :to="{ name: state.name }">
    <div :class="(isActive ? 'nav-item__active' : '') + ' nav-item'" @click="navigate">{{ state.value }}</div>
  </router-link>
</template>

<script setup lang="ts">
  import { reactive } from 'vue';

  const props = defineProps<{
    name: string;
    value: string;
  }>();
  const state = reactive({
    name : props.name,
    value: props.value,
  });

  defineExpose({ state });
</script>

<style scoped lang="scss">
  @import "src/assets/_defaults";

  .nav-item {
    @apply text-xl font-medium cursor-pointer text-$primary;
    @extend .fast;

    &__active {
      @apply text-$accent;
    }

    &:hover {
      @apply text-$accent;
    }
  }
</style>
