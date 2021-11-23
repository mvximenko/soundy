import { createStore } from 'vuex';
import { cloneDeep } from 'lodash';
import auth from '@/store/modules/auth';
import player from '@/store/modules/player';

jest.mock('@/includes/firebase', () => ({
  auth: {
    signInWithEmailAndPassword: () => Promise.resolve(),
  },
}));

describe('Vuex Store', () => {
  test('toggleAuth mutation sets userLoggedIn to true', () => {
    const clonedAuth = cloneDeep(auth);

    const store = createStore({
      modules: {
        auth: clonedAuth,
      },
    });

    expect(store.state.auth.userLoggedIn).not.toBe(true);
    store.commit('toggleAuth');
    expect(store.state.auth.userLoggedIn).toBe(true);
  });

  test('playing returns true if audio is playing', () => {
    const state = {
      sound: {
        playing: () => true,
      },
    };

    const result = player.getters.playing(state);
    expect(result).toEqual(true);
  });
});
