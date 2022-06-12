import { reactive } from 'vue';
import axios from 'axios';

interface User {
  login: string;
  avatar_url: string;
}

const useGithubAvatar = () => {
  const state = reactive<any>({
    loading: true,
    data: <User>{},
  });

  async function fetchUserDetails() {
    const response = await axios.get('http://localhost:4000/v1/github');
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
