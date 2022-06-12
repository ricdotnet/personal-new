<template>
  <div class="user-info">
    <div>
      <div class="user-info__title">Fullstack Software Engineer</div>
      <div class="user-info__content">
        Hi, my name is Ricardo,
        and I am a Software Engineer in London.
      </div>
    </div>
    <div>
      <template v-if="!state.loading">
        <div class="w-[250px] h-[250px]">
          <img class="user-info__pfp" :src="state.data.avatar_url" alt="Ricardo Rocha"/>
        </div>
      </template>
      <template v-else>
        <div class="user-info__pfp-skeleton"></div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useGithubAvatar } from '@hooks';

  const [state] = useGithubAvatar();

  defineExpose({ state });
</script>

<style scoped lang="scss">
  .user-info {
    @apply w-full flex items-center justify-between mt-20;

    &__title {
      @apply text-2xl text-$primary font-bold indent-10;
    }

    &__content {
      @apply text-2xl text-$primary font-light;
    }

    &__pfp {
      @apply rounded-full border-4 border-$primary;
    }

    &__pfp-skeleton {
      @apply w-[250px] h-[250px] rounded-full aspect-auto bg-gray-200 animate-pulse;
    }

  }
</style>
