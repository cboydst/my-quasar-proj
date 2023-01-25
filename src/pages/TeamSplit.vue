<template>
  <q-page class="row justify-center">
    <q-card class="client-form justify-center q-pt-xl q-px-lg">
      <IDidIt></IDidIt>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import IDidIt from 'components/IDidIt.vue';
</script>
<style>
.client-form {
  width: 600px;
  height: 500px;
}
</style>
