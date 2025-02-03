<template>

    <div>
        <input v-model="input" type="text" placeholder="Введите желаемую услугу">
        <button @click="sendData()">Отправить</button>
        <p v-if="result">{{ result.message }}</p>
    </div>

</template>

<script setup>

const input = ref('')
const result = ref('')

async function sendData() {

    const { data } = await useFetch('/api/users', {
        method: 'post',
        body: {
            message: input.value
        }
    })

    result.value = data.value

}

</script>