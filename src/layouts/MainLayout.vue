<template>
  <Nav/>
  <Container>
    <router-view></router-view>
  </Container>
</template>

<script setup lang="ts">
  import { reactive } from 'vue';
  import { Container, Nav } from '@components';

  const state = reactive({});

  defineExpose({ state });
</script>

<style lang="scss">
</style>
