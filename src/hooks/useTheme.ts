import { reactive } from 'vue';

const useTheme = () => {
  const state = reactive<any>({
    type: getTheme(),
  });

  function setTheme() {
    state.type === 'light' ? setDark() : setLight();
  }

  function getTheme() {
    const theme = localStorage.getItem('theme') || 'light';
    document.documentElement.className = theme;
    return theme;
  }

  function setDark() {
    state.type = 'dark';
    localStorage.setItem('theme', 'dark');
    document.documentElement.className = 'dark';
  }

  function setLight() {
    state.type = 'light';
    localStorage.setItem('theme', 'light');
    document.documentElement.className = 'light';
  }

  return [state, setTheme];
};

export {
  useTheme,
};
