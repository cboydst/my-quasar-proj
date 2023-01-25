<template>
  <q-form class="q-gutter-md">
    <q-input class="q-mb-lg" outlined v-model="name" label="Name" />
    <q-input class="q-mb-lg" outlined v-model="phone" label="Phone" />
    <q-input class="q-mb-lg" outlined v-model="email" label="Email" />
    <q-input class="q-mb-lg" outlined v-model="address" label="Address" />
  </q-form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const address = ref('');
const phone = ref('');
</script>
