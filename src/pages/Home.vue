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
      <template v-if="!githubState.loading">
        <div class="w-[250px] h-[250px]">
          <img class="user-info__pfp" :src="githubState.data.avatar_url" alt="Ricardo Rocha"/>
        </div>
      </template>
      <template v-else>
        <div class="user-info__pfp-skeleton"></div>
      </template>
    </div>
  </div>

  <div class="spotify-info">
    <template v-if="spotifyState.loading">
      loading my spotify listening status....
    </template>
    <template v-else-if="!spotifyState.data.item">
      not listening to anything currently....
    </template>
    <template v-else>
      {{ spotifyState.data.item.name }}
      <ProgressBar :name="spotifyState.data.item.name"
                   :duration="spotifyState.data.item.duration_ms"
                   :progress="spotifyState.data.progress_ms"/>
    </template>
  </div>
</template>

<script setup lang="ts">
  import { reactive } from 'vue';
  import { useGithubAvatar, useSpotify } from '@hooks';
  import { ProgressBar } from '@components';

  const [githubState] = useGithubAvatar();
  const [spotifyState] = useSpotify();

  const state = reactive<any>({});

  defineExpose({ state, githubState, spotifyState });
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

  .spotify-info {
    @apply w-full flex flex-col justify-between mt-20;
  }
</style>
