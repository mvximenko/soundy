<template>
  <section class="container mx-auto mt-6">
    <div class="md:grid md:grid-cols-3 md:gap-4">
      <div class="col-span-1">
        <app-upload />
      </div>
      <div class="col-span-2">
        <div class="bg-white rounded border border-gray-200 relative flex flex-col">
          <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
            <span class="card-title">My Songs</span>
            <i class="fa fa-compact-disc float-right text-green-400 text-2xl"></i>
          </div>
          <div class="p-6">
            <composition-item v-for="song in songs" :key="song.docID" :song="song" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import { where, get } from 'firebase/firestore';

import { query, where, getDocs } from 'firebase/firestore';
import AppUpload from '@/components/Upload.vue';
import CompositionItem from '@/components/CompositionItem.vue';
import { songsCollection, auth } from '@/includes/firebase';

export default {
  name: 'Manage',
  components: {
    AppUpload,
    CompositionItem,
  },
  data() {
    return {
      songs: [],
    };
  },
  async created() {
    const q = query(songsCollection, where('uid', '==', auth.currentUser.uid));
    const snapshot = await getDocs(q);

    snapshot.forEach((doc) => {
      const song = {
        ...doc.data(),
        docID: doc.id,
      };

      this.songs.push(song);
    });
  },
};
</script>
