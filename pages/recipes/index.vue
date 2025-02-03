<template>

    <ul>
        <li v-for="recipe in data.recipes" :key="recipe.id">{{ recipe.name }}</li>
    </ul>

</template>

<script setup>


const { data, error } = await useFetch('https://dummyjson.com/recipes', {
    method: '',
    body: {

    }
})

</script>