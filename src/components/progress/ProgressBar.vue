<template>
  <div class="progress-bar">
    <div class="progress-bar__progress" :style="`width: ${state.progressBarPer}%;`"></div>
  </div>
</template>

<script setup lang="ts">
  import { reactive, watch } from 'vue';

  const props = defineProps<{
    name: string,
    duration: number;
    progress: number;
  }>();

  watch(props, () => {
    calculateProgress();
  });

  const state = reactive<any>({
    name: props.name,
    duration: props.duration,
    progress: props.progress,
    progressBarPer: 0,
    progressTimer: null,
  });

  function calculateProgress() {
    state.duration = props.duration;
    state.progress = props.progress;
    clearInterval(state.progressTimer);
    state.progressTimer = setInterval(() => {
      state.progress += 1000;
      state.progressBarPer = ((state.progress * 100) / state.duration);
    }, 1000);
  }

  calculateProgress();

  defineExpose({ calculateProgress });
</script>

<style scoped lang="scss">
  @import "src/assets/_defaults";

  .progress-bar {
    @apply bg-gray-300 h-1 w-full rounded-full relative overflow-hidden;

    &__progress {
      @apply bg-$accent h-1 rounded-full super-slow;
    }
  }
</style>
