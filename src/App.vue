<script>
import ProjectIndex from './pages/projects/projectindex.vue';
import Portfolio from './views/Portfolio.vue';
export default{
  components: {
    ProjectIndex,
    Portfolio,
  }
}
</script>

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@use './style/general.scss'

</style>
