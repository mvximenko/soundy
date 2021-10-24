<template>
  <app-header />
  <router-view />
  <app-player />
  <auth-modal />
</template>

<script>
import AppPlayer from '@/components/Player.vue';
import AppHeader from '@/components/Header.vue';
import AuthModal from '@/components/Auth.vue';

export default {
  name: 'App',
  components: {
    AppPlayer,
    AppHeader,
    AuthModal,
  },
  created() {
    this.$store.dispatch('init_login');
  },
};
</script>
