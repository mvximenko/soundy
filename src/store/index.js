import { createStore } from 'vuex';
import auth from './modules/auth';
import player from './modules/player';

export default createStore({
  modules: {
    auth,
    player,
  },
});
