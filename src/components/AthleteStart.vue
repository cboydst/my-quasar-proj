<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<template>
  <div v-for="athlete in fbAthletes" :athlete="athlete" :key="athlete.Name">
    <q-card class="player-card">
      <q-card-section>
        <div class="text-h6">Name: {{ athlete.Name }}</div>
      </q-card-section>
      <q-card-section>
        <div class="text-h6">Jump Disc: {{ athlete.Jump_Disc }}</div>
      </q-card-section>
      <q-card-section>
        <div class="text-h6">Personality Traits:</div>
        <div
          v-for="(value, key) in athlete.Personality"
          :key="key"
          class="text-body1"
        >
          {{ key }}
        </div>
      </q-card-section>
      <q-card-section>
        <div class="text-h6">Handling: {{ athlete.Handling }}</div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { collection, getDocs } from 'firebase/firestore';
import { db } from 'src/firebase';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let fbAthletes = ref([] as any[]);

onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, 'players'));
  querySnapshot.forEach((player) => {
    const athlete = {
      Name: player.data().Name,
      Jump_Disc: player.data()['Jump Disc'],
      Personality: player.data().Personality,
      Handling: player.data().Handling,
    };
    console.log(athlete);
    fbAthletes.value.push(athlete);
    console.log(fbAthletes);
  });
});
</script>
