import { createStore } from 'vuex';
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '@/includes/firebase';

export default createStore({
  state: {
    authModalShow: false,
    userLoggedIn: false,
  },
  mutations: {
    toggleAuthModal: (state) => {
      state.authModalShow = !state.authModalShow;
    },
    toggleAuth(state) {
      state.userLoggedIn = !state.userLoggedIn;
    },
  },
  actions: {
    async register({ commit }, payload) {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        payload.email,
        payload.password,
      );

      const userRef = doc(db, `users/${userCred.user.uid}`);

      await setDoc(userRef, {
        name: payload.name,
        email: payload.email,
        age: payload.age,
        country: payload.country,
      });

      await updateProfile(userCred.user, { displayName: payload.name });

      commit('toggleAuth');
    },
    async login({ commit }, payload) {
      await signInWithEmailAndPassword(auth, payload.email, payload.password);

      commit('toggleAuth');
    },
    init_login({ commit }) {
      const user = auth.currentUser;

      if (user) {
        commit('toggleAuth');
      }
    },
    async signout({ commit }) {
      await signOut(auth);

      commit('toggleAuth');
    },
  },
});
