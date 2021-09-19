<template>
  <app-header />
  <section class="mb-8 py-20 text-white text-center relative">
    <div
      class="absolute inset-0 w-full h-full bg-contain introduction-bg"
      style="background-image: url(assets/img/header.png)"
    ></div>
    <div class="container mx-auto">
      <div class="text-white main-header-content">
        <h1 class="font-bold text-5xl mb-5">Listen to Great Music!</h1>
        <p class="w-full md:w-8/12 mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et dolor mollis, congue
          augue non, venenatis elit. Nunc justo eros, suscipit ac aliquet imperdiet, venenatis et
          sapien. Duis sed magna pulvinar, fringilla lorem eget, ullamcorper urna.
        </p>
      </div>
    </div>

    <img
      class="relative block mx-auto mt-5 -mb-20 w-auto max-w-full"
      src="assets/img/introduction-music.png"
    />
  </section>

  <section class="container mx-auto">
    <div class="bg-white rounded border border-gray-200 relative flex flex-col">
      <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
        <span class="card-title">Songs</span>
        <i class="fa fa-headphones-alt float-right text-green-400 text-2xl"></i>
      </div>

      <ol id="playlist">
        <li
          class="
            flex
            justify-between
            items-center
            p-3
            pl-6
            cursor-pointer
            transition
            duration-300
            hover:bg-gray-50
          "
        >
          <div>
            <a href="#" class="font-bold block text-gray-600">Song Title</a>
            <span class="text-gray-500 text-sm">Artist Name</span>
          </div>

          <div class="text-gray-600 text-lg">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li
          class="
            flex
            justify-between
            items-center
            p-3
            pl-6
            cursor-pointer
            transition
            duration-300
            hover:bg-gray-50
          "
        >
          <div>
            <a href="#" class="font-bold block text-gray-600">Song Title</a>
            <span class="text-gray-500 text-sm">Artist Name</span>
          </div>

          <div class="text-gray-600 text-lg">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li
          class="
            flex
            justify-between
            items-center
            p-3
            pl-6
            cursor-pointer
            transition
            duration-300
            hover:bg-gray-50
          "
        >
          <div>
            <a href="#" class="font-bold block text-gray-600">Song Title</a>
            <span class="text-gray-500 text-sm">Artist Name</span>
          </div>

          <div class="text-gray-600 text-lg">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li
          class="
            flex
            justify-between
            items-center
            p-3
            pl-6
            cursor-pointer
            transition
            duration-300
            hover:bg-gray-50
          "
        >
          <div>
            <a href="#" class="font-bold block text-gray-600">Song Title</a>
            <span class="text-gray-500 text-sm">Artist Name</span>
          </div>

          <div class="text-gray-600 text-lg">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li
          class="
            flex
            justify-between
            items-center
            p-3
            pl-6
            cursor-pointer
            transition
            duration-300
            hover:bg-gray-50
          "
        >
          <div>
            <a href="#" class="font-bold block text-gray-600">Song Title</a>
            <span class="text-gray-500 text-sm">Artist Name</span>
          </div>

          <div class="text-gray-600 text-lg">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li
          class="
            flex
            justify-between
            items-center
            p-3
            pl-6
            cursor-pointer
            transition
            duration-300
            hover:bg-gray-50
          "
        >
          <div>
            <a href="#" class="font-bold block text-gray-600">Song Title</a>
            <span class="text-gray-500 text-sm">Artist Name</span>
          </div>

          <div class="text-gray-600 text-lg">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li
          class="
            flex
            justify-between
            items-center
            p-3
            pl-6
            cursor-pointer
            transition
            duration-300
            hover:bg-gray-50
          "
        >
          <div>
            <a href="#" class="font-bold block text-gray-600">Song Title</a>
            <span class="text-gray-500 text-sm">Artist Name</span>
          </div>

          <div class="text-gray-600 text-lg">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li
          class="
            flex
            justify-between
            items-center
            p-3
            pl-6
            cursor-pointer
            transition
            duration-300
            hover:bg-gray-50
          "
        >
          <div>
            <a href="#" class="font-bold block text-gray-600">Song Title</a>
            <span class="text-gray-500 text-sm">Artist Name</span>
          </div>

          <div class="text-gray-600 text-lg">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li
          class="
            flex
            justify-between
            items-center
            p-3
            pl-6
            cursor-pointer
            transition
            duration-300
            hover:bg-gray-50
          "
        >
          <div>
            <a href="#" class="font-bold block text-gray-600">Song Title</a>
            <span class="text-gray-500 text-sm">Artist Name</span>
          </div>

          <div class="text-gray-600 text-lg">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li
          class="
            flex
            justify-between
            items-center
            p-3
            pl-6
            cursor-pointer
            transition
            duration-300
            hover:bg-gray-50
          "
        >
          <div>
            <a href="#" class="font-bold block text-gray-600">Song Title</a>
            <span class="text-gray-500 text-sm">Artist Name</span>
          </div>

          <div class="text-gray-600 text-lg">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li
          class="
            flex
            justify-between
            items-center
            p-3
            pl-6
            cursor-pointer
            transition
            duration-300
            hover:bg-gray-50
          "
        >
          <div>
            <a href="#" class="font-bold block text-gray-600">Song Title</a>
            <span class="text-gray-500 text-sm">Artist Name</span>
          </div>

          <div class="text-gray-600 text-lg">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li
          class="
            flex
            justify-between
            items-center
            p-3
            pl-6
            cursor-pointer
            transition
            duration-300
            hover:bg-gray-50
          "
        >
          <div>
            <a href="#" class="font-bold block text-gray-600">Song Title</a>
            <span class="text-gray-500 text-sm">Artist Name</span>
          </div>

          <div class="text-gray-600 text-lg">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li
          class="
            flex
            justify-between
            items-center
            p-3
            pl-6
            cursor-pointer
            transition
            duration-300
            hover:bg-gray-50
          "
        >
          <div>
            <a href="#" class="font-bold block text-gray-600">Song Title</a>
            <span class="text-gray-500 text-sm">Artist Name</span>
          </div>

          <div class="text-gray-600 text-lg">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
      </ol>
    </div>
  </section>

  <div class="fixed bottom-0 left-0 bg-white p-5 pb-4 text-left align-top w-full h-16">
    <div class="relative">
      <div class="float-left w-7 h-7 leading-3">
        <button type="button">
          <i class="fa fa-play text-gray-500 text-xl"></i>
        </button>
      </div>

      <div class="float-left w-7 h-7 leading-3 text-gray-400 mt-0 text-lg w-14 ml-5 mt-1">
        <span class="player-currenttime">00:00</span>
      </div>

      <div class="float-left w-7 h-7 leading-3 ml-7 mt-2 player-scrub">
        <div class="absolute left-0 right-0 text-lg text-center mx-auto player-song-info">
          <span class="song-title">Song Title</span> by
          <span class="song-artist">Artist</span>
        </div>
        <span class="block w-full h-2 rounded m-1 mt-2 bg-gray-200 relative cursor-pointer">
          <span class="absolute top-neg-8 text-gray-800 text-lg" style="left: 50%">
            <i class="fas fa-circle"></i>
          </span>
          <span
            class="block h-2 rounded bg-gradient-to-r from-green-500 to-green-400"
            style="width: 50%"
          ></span>
        </span>
      </div>
      <div class="float-left w-7 h-7 leading-3 text-gray-400 mt-0 text-lg w-14 ml-8 mt-1">
        <span class="player-duration">03:06</span>
      </div>
    </div>
  </div>

  <auth-modal />
</template>

<script>
import AppHeader from './components/Header.vue';
import AuthModal from './components/Auth.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AuthModal,
  },
  created() {
    this.$store.dispatch('init_login');
  },
};
</script>
