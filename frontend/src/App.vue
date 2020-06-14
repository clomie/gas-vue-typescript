<template>
  <v-app id="app-root">
    <navigation-drawer v-model="drawer" />
    <v-toolbar color="blue" dark clipped-left fixed app>
      <v-toolbar-side-icon @click.stop="toggleDrawer" />
      <v-toolbar-title>GAS built by Vue CLI v3</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height grid-list-md>
        <router-view />
      </v-container>
    </v-content>
    <v-footer color="blue" dark class="app-footer">
      <span>gas-vue-ts</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import NavigationDrawer from './components/NavigationDrawer.vue'

export default Vue.extend({
  name: 'app',
  components: {
    NavigationDrawer
  },
  data() {
    return {
      drawer: null as boolean | null
    }
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer
    }
  }
})
</script>

<style scoped>
.app-footer {
  justify-content: center;
}
</style>
