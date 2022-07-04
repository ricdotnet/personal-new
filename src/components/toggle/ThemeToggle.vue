<template>
  <div class="toggle slow"
       :class="resolveCss('toggle-day', 'toggle-night')"
       @click="setTheme">
    <div class="flex relative">
      <SunIcon class="sun"/>
      <MoonIcon class="moon" :class="resolveCss('text-white', 'text-$primary')"/>
    </div>
    <div class="toggle__selector slow" :class="resolveCss('day', 'night')"></div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { useTheme } from '@hooks';
  import { MoonIcon, SunIcon } from '@heroicons/vue/outline';

  const [theme, setTheme] = useTheme();
  const currentTheme = computed(() => theme.type);

  function resolveCss(value1: string, value2: string) {
    return currentTheme.value === 'light' ? value1 : value2;
  }
</script>

<style scoped lang="scss">
  @import "src/assets/_defaults";

  .toggle {
    @apply w-[58px] h-[30px] relative rounded-full cursor-pointer;

    &__selector {
      @apply w-[26px] h-[26px] bg-$accent rounded-full absolute top-[2px];
    }

    .day {
      @apply left-[2px];
    }

    .night {
      @apply left-[30px];
    }
  }

  .toggle-day {
    @apply bg-$primary;
  }

  .toggle-night {
    @apply bg-white;
  }

  .icon {
    @apply z-10 w-[22px] absolute top-[4px] slow;
  }
  .sun {
    @apply icon left-[4px] text-white dark:text-$primary;
  }
  .moon {
    @apply icon right-[4px] dark:text-$primary;
  }
</style>
