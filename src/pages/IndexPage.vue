<template>
  <q-page class="column">
    <q-drawer
      v-model="drawer"
      breakpoint="lg"
      style="'background-colr:$base-color'"
    >
      <q-list>
        <q-item link to="/">
          <q-item-section>
            <q-item-label>Home</q-item-label>
          </q-item-section>
        </q-item>
        <q-item link to="/athletes">
          <q-item-section>
            <q-item-label>Athletes</q-item-label>
          </q-item-section>
        </q-item>
        <q-item link to="/teams">
          <q-item-section>
            <q-item-label>Teams</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <IDidIt></IDidIt>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import IDidIt from 'components/IDidIt.vue';
import { collection, getDocs } from 'firebase/firestore';
import { db } from 'src/firebase';

onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, 'players'));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
});

const drawer = ref(false);
</script>
