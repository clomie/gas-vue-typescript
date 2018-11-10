<template>
  <v-layout row wrap="" align-content-start>
    <v-flex xs12><copy-file /></v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue'
import CopyFile from '@/components/CopyFile.vue'

export default Vue.extend({
  name: 'home',
  components: {
    CopyFile
  }
})
</script>
