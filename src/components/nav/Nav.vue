<template>
  <div class="navbar">
    <div class="navbar__name">Ricardo</div>
    <div class="navbar__right">
      <NavItem name="home" value="Home"/>
      <NavItem name="about" value="About"/>
      <NavItem name="projects" value="Projects"/>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { reactive } from 'vue';
  import { NavItem } from '@components';

  const state = reactive({});

  defineExpose({ state });
</script>

<style scoped lang="scss">
  .navbar {
    @apply h-14 flex justify-between items-center;
    @apply w-full px-10 lg:px-0 lg:container-lg lg:mx-auto;

    &__name {
      @apply font-bold text-$primary text-4xl;
    }

    &__right {
      @apply flex space-x-4;
    }
  }
</style>
