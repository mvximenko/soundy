<template>
  <section class="w-full mb-8 py-14 text-center text-white relative">
    <div
      class="absolute inset-0 w-full h-full box-border bg-contain music-bg"
      style="background-image: url(/assets/img/song-header.png)"
    ></div>
    <div class="container mx-auto flex items-center">
      <button
        type="button"
        class="z-50 h-24 w-24 text-3xl bg-white text-black rounded-full focus:outline-none"
      >
        <i class="fas fa-play"></i>
      </button>
      <div class="z-50 text-left ml-8">
        <div class="text-3xl font-bold">{{ song.modified_name }}</div>
        <div>{{ song.genre }}</div>
      </div>
    </div>
  </section>

  <section class="container mx-auto mt-6">
    <div class="bg-white rounded border border-gray-200 relative flex flex-col">
      <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
        <span class="card-title">Comments (15)</span>
        <i class="fa fa-comments float-right text-green-400 text-2xl"></i>
      </div>
      <div class="p-6">
        <form>
          <textarea
            class="
              block
              w-full
              py-1.5
              px-3
              text-gray-800
              border border-gray-300
              transition
              duration-500
              focus:outline-none focus:border-black
              rounded
              mb-4
            "
            placeholder="Your comment here..."
          ></textarea>
          <button type="submit" class="py-1.5 px-3 rounded text-white bg-green-600">Submit</button>
        </form>
        <select
          class="
            block
            mt-4
            py-1.5
            px-3
            text-gray-800
            border border-gray-300
            transition
            duration-500
            focus:outline-none focus:border-black
            rounded
          "
        >
          <option value="1">Latest</option>
          <option value="2">Oldest</option>
        </select>
      </div>
    </div>
  </section>
  <ul class="container mx-auto">
    <li class="p-6 bg-gray-50 border border-gray-200">
      <div class="mb-5">
        <div class="font-bold">Elaine Dreyfuss</div>
        <time>5 mins ago</time>
      </div>

      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium der doloremque
        laudantium.
      </p>
    </li>
    <li class="p-6 bg-gray-50 border border-gray-200">
      <div class="mb-5">
        <div class="font-bold">Elaine Dreyfuss</div>
        <time>5 mins ago</time>
      </div>

      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium der doloremque
        laudantium.
      </p>
    </li>
    <li class="p-6 bg-gray-50 border border-gray-200">
      <div class="mb-5">
        <div class="font-bold">Elaine Dreyfuss</div>
        <time>5 mins ago</time>
      </div>

      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium der doloremque
        laudantium.
      </p>
    </li>
    <li class="p-6 bg-gray-50 border border-gray-200">
      <div class="mb-5">
        <div class="font-bold">Elaine Dreyfuss</div>
        <time>5 mins ago</time>
      </div>

      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium der doloremque
        laudantium.
      </p>
    </li>
    <li class="p-6 bg-gray-50 border border-gray-200">
      <div class="mb-5">
        <div class="font-bold">Elaine Dreyfuss</div>
        <time>5 mins ago</time>
      </div>

      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium der doloremque
        laudantium.
      </p>
    </li>
    <li class="p-6 bg-gray-50 border border-gray-200">
      <div class="mb-5">
        <div class="font-bold">Elaine Dreyfuss</div>
        <time>5 mins ago</time>
      </div>

      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium der doloremque
        laudantium.
      </p>
    </li>
  </ul>
</template>

<script>
import { doc, getDoc } from 'firebase/firestore';
import { songsCollection } from '@/includes/firebase';

export default {
  name: 'Song',
  data() {
    return {
      song: {},
    };
  },
  async created() {
    const docSnapshot = await getDoc(doc(songsCollection, this.$route.params.id));

    if (!docSnapshot.exists) {
      this.$router.push({ name: 'Home' });
      return;
    }

    this.song = docSnapshot.data();
  },
};
</script>
