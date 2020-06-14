<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>Built @ {{ timestamp }}</p>
    <img alt="Vue logo" src="@/assets/logo.png" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'about',
  data() {
    return {
      timestamp: process.env.VUE_APP_BUILD_TIMESTAMP
    }
  }
})
</script>
