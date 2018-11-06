<template>
  <v-navigation-drawer clipped fixed v-model="drawer" app>
    <v-list>
      <list-menu icon="home" title="Home" to="/"/>
      <list-menu icon="info" title="About" to="/about"/>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import ListMenu from './ListMenu'

export default {
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
      get() {
        return this.value
      },
      set(newValue) {
        this.$emit('input', newValue)
      }
    }
  }
}
</script>
