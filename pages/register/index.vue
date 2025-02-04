<template>


    <form @submit.prevent="registerUser"
        class="flex flex-col gap-y-5 max-w-[500px] mx-auto my-20 border border-pink-500 p-5">
        <input v-model="email" required class="py-2 px-4 border border-pink-600" type="text"
            placeholder="Введите Email">
        <input v-model="name" class="py-2 px-4 border border-pink-600" type="text" placeholder="Ваше ФИО">
        <input v-model="password" required class="py-2 px-4 border border-pink-600" type="password"
            placeholder="Введите пароль">
        <button class="py-2 px-4 bg-pink-600 hover:bg-pink-800 transition-all text-white cursor-pointer"
            type="submit">Зарегестрироваться</button>

        <div v-if="status" class="mt-5">{{ status }}</div>
    </form>


</template>

<script setup>

const name = ref('')
const email = ref('')
const password = ref('')

const status = ref('')

const router = useRouter()

async function registerUser() {

    const { data } = await useFetch('/api/users', {
        method: 'post',
        body: {
            email: email.value,
            name: name.value,
            password: password.value
        }
    })

    if (data.value.status === 'ok') {
        status.value = 'Вы успешно зарегестрировались'
        router.push('/')

    }

}

</script>