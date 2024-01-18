<script>
export default {
    created() {
        console.log('componente NotFound.');
    },
};
</script>

<template>
    <div>
        <h1>404 - Page not found</h1>
        <p>go back to: <router-link :to="{ name: 'home' }"> Home Page</router-link>.</p>
    </div>
</template>

<style scoped>
h1 {
    color: #ffc400;
}
</style>