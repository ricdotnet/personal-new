import { reactive } from 'vue';
import axios from 'axios';

type User = {
  login: string;
  avatar_url: string;
}

const useGithubAvatar = () => {
  const state = reactive<any>({
    loading: true,
    data: <User>{},
  });

  async function fetchUserDetails() {
    const response = await axios.get(`${import.meta.env.VITE_API}/github`);
    state.data = {
      login: response.data.login,
      avatar_url: response.data.avatar_url,
    };
    state.loading = false;
    return state.data;
  }

  return [state, fetchUserDetails()];
};

export {
  useGithubAvatar,
};
