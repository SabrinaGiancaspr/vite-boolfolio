<script>
  export default {
    data() {
      return {
        welcomeMsg: 'Benvenut*!',
        additionalMsg: ' Grazie per la visita!',
      };
    },
    computed: {
      formattedMsg() {
        return this.welcomeMsg.toUpperCase() + this.additionalMsg;
      },
    },
    methods: {
      changeMsg() {
        this.welcomeMsg = 'Nuovo Messaggio!';
      },
    },
    created() {
      console.log('Il componente Home è stato creato.');
    },
  };
</script>

<template>
    <div>
        <h1>{{ welcomeMsg }}</h1>
        <p>{{ formattedMsg }}</p>
        <button @click="changeMsg">Cambia Messaggio</button>
        <router-link to="/portfolio">Vai alla Pagina Portfolio</router-link>
    </div>
</template>
  
  <style lang="scss">

  </style>