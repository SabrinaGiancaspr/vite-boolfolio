<script>
import ProjectCard from '../components/ProjectCard.vue';

export default {
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: [],
    };
  },
};
</script>

<template>
    <div>
      <h1>Portfolio</h1>
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
      <router-link to="/">Torna alla Home</router-link>
    </div>
</template>

<style lang="scss">
</style>
  
