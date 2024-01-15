<script>
import ProjectCard from '../../components/ProjectCard.vue';
import axios from 'axios';

export default{
    components:{
        ProjectCard
    },
    data(){
        return{
            projects: []
        }
    },
    methods: {
        fetchData(){
            axios.get('http://127.0.0.1:8000/api/projects').then((res) => {
               this.projects = res.data.results.data
            })
        }
    },
    
    created() {
        this.fetchData()
    }
}
</script>

<template>
    <div class="card-container">
        <div class="row">
            <div class="col-4" v-for="project in projects">
                <ProjectCard :project="project"/>
            </div>
        </div>
       
    </div>

</template>

<style lang="scss">

.card-container{
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 50px;
    padding: 20px;
    border: 2px solid black;
   
    .row{
        display: flex;
        flex-wrap: wrap;
        gap: 10px;

        .col-4{
            flex-basis: calc(100% * 4 / 12 - 10px);
        }
    }

}
</style>