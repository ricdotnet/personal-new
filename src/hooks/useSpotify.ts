import { reactive } from 'vue';
import axios from 'axios';

const useSpotify = () => {
  const state = reactive<any>({
    loading: true,
    data: null,
  });

  async function fetchSpotifyStatus() {
    const response = await axios.get(`${import.meta.env.VITE_API}/spotify`);
    state.data = response.data;
    state.loading = false;

    let refetchTimer: any = null;

    function refetchStatus() {
      clearTimeout(refetchTimer);
      refetchTimer = setTimeout(fetchSpotifyStatus, calculateNextSong(state.data));
    }

    if (state.data && state.data.item) {
      refetchStatus();
    }
    return state.data;
  }

  return [state, fetchSpotifyStatus()];
};

function calculateNextSong(song: any): number {
  return (song.item.duration_ms - song.progress_ms);
}

export { useSpotify };
