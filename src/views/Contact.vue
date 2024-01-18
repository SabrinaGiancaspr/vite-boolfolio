<script>
export default {
  data() {
    return {
      Title: 'Contattaci',
      email: 'info@example.com',
      phoneNumber: 'xxx-xxxx',
    };
  },
  created() {
    console.log('Il componente Contact è stato creato.');
  },
};
</script>

<template>
    <div>
      <h1>Contattaci</h1>
      <p>Email: {{ email }}</p>
      <p>Telefono: {{ phoneNumber }}</p>
    </div>
  </template>

<style lang="scss">

</style>