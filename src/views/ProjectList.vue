<script>
export default{
    data(){
        return{
            project:{},
        };
    },

    methods:{
        fretchProject(){
            const slug = this.$route.params.slug;
            axios.get('http://localhost:8000/api/projects/${slug}').then((res)=>{
                this.project=res.data;
            })
            .catch((error) => {
            console.error('Errore nel recupero dei dettagli del progetto:', error);
        });
        },  
    },
    created(){
        this.fretchProject();
    },
};
</script>

<template>
    <div>
        <h1>{{ project.name }}</h1>
        <p>{{ project.description }}</p>
    </div>
</template>

<style>

</style>