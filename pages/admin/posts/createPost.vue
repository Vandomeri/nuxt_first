<template>

    <h1 class="my-5 text-center text-3xl font-bold">Создать пост от имени пользователя</h1>

    <form @submit.prevent.stop="createPost()" class="flex flex-col">
        <v-select v-model="post.userId" label="Выберите пользователя" :items="users" item-title="email"
            item-value="id"></v-select>
        <v-text-field v-model="post.title" label="Введите название"></v-text-field>
        <v-textarea v-model="post.description" label="Введите описание"></v-textarea>
        <v-textarea v-model="post.text" label="Начните писать текст..."></v-textarea>
        <button type="submit" class="mb-5">Создать</button>
    </form>

</template>

<script setup>

const { data: users } = await useFetch('/api/users')

const post = reactive({
    title: '',
    description: '',
    text: '',
    userId: null
})

async function createPost() {
    console.log('dsdasdas')
    const resp = await $fetch('/api/posts', {
        method: 'post',
        body: post
    })

    post.title = ''
    post.description = ''
    post.text = ''
    post.userId = null
    await nextTick()
}

</script>