<template>
  <div class="fixed bottom-0 left-0 bg-white p-5 pb-4 text-left align-top w-full h-16">
    <div class="relative">
      <div class="float-left w-7 h-7 leading-3">
        <button type="button" @click.prevent="toggleAudio">
          <i
            class="fa text-gray-500 text-xl"
            :class="{ 'fa-play': !playing, 'fa-pause': playing }"
          ></i>
        </button>
      </div>

      <div class="float-left w-7 h-7 leading-3 text-gray-400 mt-0 text-lg w-14 ml-5 mt-1">
        <span class="player-currenttime">{{ seek }}</span>
      </div>

      <div class="float-left w-7 h-7 leading-3 ml-7 mt-2 player-scrub">
        <div
          class="absolute left-0 right-0 text-lg text-center mx-auto player-song-info"
          v-if="currentSong.modified_name"
        >
          <span class="song-title">{{ currentSong.modified_name }}</span>
          <span class="song-artist"> (Uploaded by {{ currentSong.display_name }}) </span>
        </div>
        <span
          class="block w-full h-2 rounded m-1 mt-2 bg-gray-200 relative cursor-pointer"
          @click.prevent="updateSeek"
        >
          <span class="absolute top-neg-8 text-gray-800 text-lg" :style="{ left: playerProgress }">
            <i class="fas fa-circle"></i>
          </span>
          <span
            class="block h-2 rounded bg-gradient-to-r from-green-500 to-green-400"
            :style="{ width: playerProgress }"
          ></span>
        </span>
      </div>
      <div class="float-left w-7 h-7 leading-3 text-gray-400 mt-0 text-lg w-14 ml-8 mt-1">
        <span class="player-duration">{{ duration }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
  name: 'Player',
  computed: {
    ...mapGetters(['playing']),
    ...mapState({
      seek: (state) => state.player.seek,
      duration: (state) => state.player.duration,
      playerProgress: (state) => state.player.playerProgress,
      currentSong: (state) => state.player.currentSong,
    }),
  },
  methods: {
    ...mapActions(['toggleAudio', 'updateSeek']),
  },
};
</script>
