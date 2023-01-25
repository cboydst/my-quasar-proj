<template>
  <q-list bordered rounded dark>
    <q-item v-for="item in items" :key="item.title" clickable>
      <q-item-section>
        <q-item-label>{{ item.title }}</q-item-label>
        <q-item-label caption>{{ item.caption }}</q-item-label>
      </q-item-section>
      <q-item-section side>
        <q-btn dense flat icon="edit" />
        <q-btn dense flat icon="delete" />
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { collection, getDocs, doc, query, where } from 'firebase/firestore';
import { db } from 'src/firebase';

onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, 'teams'));
  //get the most recent teams entry
  let playerRef =
    querySnapshot.docs[0]._document.data.value.mapValue.fields.player
      .referenceValue;

  let referenceId = playerRef.substring(playerRef.lastIndexOf('/') + 1);
  console.log(referenceId);
  const players = await getDocs(collection(db, 'players'));
  const player = players.console.log(players);
});
</script>
<style></style>
