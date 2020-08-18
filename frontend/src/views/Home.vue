<template>
  <v-row>
    <v-col cols="12"><copy-file /></v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import CopyFile from '@/components/CopyFile.vue'

export default Vue.extend({
  name: 'home',
  components: {
    CopyFile,
  },
})
</script>
