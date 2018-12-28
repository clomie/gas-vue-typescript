<template>
  <div class="about">
    <h1>This is an about page</h1>
    <span>Built @ {{ timestamp }}</span>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      timestamp: process.env.VUE_APP_BUILD_TIMESTAMP
    }
  }
}
</script>
