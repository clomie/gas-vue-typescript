<template>
  <v-navigation-drawer clipped fixed v-model="drawer" app>
    <v-list>
      <list-menu icon="home" title="Home" to="/" />
      <list-menu icon="info" title="About" to="/about" />
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue'
import ListMenu from './NavigationDrawer/ListMenu.vue'

export default Vue.extend({
  name: 'navigation-drawer',
  components: { ListMenu },
  props: {
    value: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    drawer: {
      get(): boolean {
        return this.value
      },
      set(newValue: boolean) {
        this.$emit('input', newValue)
      }
    }
  }
})
</script>
