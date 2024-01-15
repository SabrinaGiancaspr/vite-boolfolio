<script>
export default{
    props: {
        project: {
            type: Object,
            required: true,
        },
    },
}
</script>

<template>
<div class="card">
    <div class="d-flex">
        <h3 class="name">{{ project.name }}</h3>
    
    <p class="description"> <span class="font-strong">Description:</span> {{ project.description }}</p>
    <p class="link"> <span class="font-strong">Link:</span> {{ project.link }}</p>
    <p class="project-status"> <span class="font-strong">Status: </span>{{ project.project_status }}</p>
</div>
</div>


</template>

<style lang="scss">
.card{
    border: 1px solid black;
    min-height: 400px;
    background-color: rgba(223, 221, 221, 0.262);
    padding: 10px;

    .d-flex{
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 10px;

        .name{
        border: 1px solid black;
        margin: 15px;
        }
    }

    .description{
        border: 1px solid black;
    }

    .font-strong{
        font-weight: bold
    }
}
    
    

</style>