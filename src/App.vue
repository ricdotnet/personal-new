<template>
  <MainLayout/>
</template>

<script setup lang="ts">
  import { reactive } from 'vue';
  import { MainLayout } from '@layouts';

  const state = reactive({});

  defineExpose({ state });
</script>

<style scoped lang="scss">
</style>
