<template>

    <ul>
        <li v-for="user in data.users" :key="user.id">
            {{ user.name }}
        </li>
    </ul>

</template>

<script setup>

const { data } = await useFetch('/api/users')

</script>