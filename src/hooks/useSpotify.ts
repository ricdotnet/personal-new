import { reactive } from 'vue';
import axios from 'axios';

const useSpotify = () => {
  const state = reactive<any>({
    loading: true,
    data: null,
  });

  async function fetchSpotifyStatus() {
    const response = await axios.get('http://localhost:4000/v1/spotify');
    state.data = response.data;
    state.loading = false;

    let refetchTimer: any = null;

    function refetchStatus() {
      clearTimeout(refetchTimer);
      refetchTimer = setTimeout(fetchSpotifyStatus, calculateNextSong(state.data));
    }

    refetchStatus();
    return state.data;
  }

  return [state, fetchSpotifyStatus()];
};

function calculateNextSong(song: any): number {
  return (song.item.duration_ms - song.progress_ms);
}

export { useSpotify };
