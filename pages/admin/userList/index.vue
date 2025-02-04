<template>

    <v-text-field v-model="search" label="Поиск по таблице..."></v-text-field>
    <v-data-table :headers="headers" :items="users" :search="search">


        <template v-slot:item.id="{ value }">

            <div class="w-[30px] h-[30px] flex justify-center items-center p-2 rounded-full border border-red-500">
                {{ value }}
            </div>

        </template>

        <template v-slot:item.actions="{ item }">

            <div class="flex gap-x-4">
                <v-btn @click="editUser(item)" size="small">Edit</v-btn>
                <v-btn @click="deleteUser(item.id)" color="red" size="small">Delete</v-btn>
            </div>


        </template>

    </v-data-table>



    <v-dialog max-width="500" v-model="showModal">

        <div class="!p-5 bg-white">
            <form @submit.prevent="sendModalForm">
                <v-text-field v-model="modalForm.email" label="E-mail"></v-text-field>
                <v-text-field v-model="modalForm.name" label="Имя"></v-text-field>
                <v-text-field v-model="modalForm.password" label="Пароль"></v-text-field>
                <v-btn block type="submit">Сохранить</v-btn>
            </form>
        </div>

    </v-dialog>
</template>

<script setup>

const headers = ref([
    { title: 'АйДи', key: 'id' },
    { title: 'ФИО', key: 'name' },
    { title: 'Почта', key: 'email' },
    { title: 'Пароль', key: 'password' },
    { title: 'Действия', key: 'actions' },

])


const modalForm = reactive({
    id: null,
    name: '',
    email: '',
    password: ''
})

const showModal = ref(false)

const { data: users, refresh } = await useFetch('/api/users')


const search = ref('')


async function deleteUser(userId) {

    const { data: deletedUser } = await useFetch('/api/users', {
        method: 'delete',
        body: {
            id: userId
        }
    })

    const index = users.value.findIndex((el) => el.id == deletedUser.value.id)

    if (index !== -1) {
        users.value.splice(index, 1)
    }

}


function editUser(item) {

    modalForm.email = item.email
    modalForm.id = item.id
    modalForm.name = item.name
    modalForm.password = item.password

    showModal.value = true
}

async function sendModalForm() {
    const { data: editedUser } = await useFetch('/api/users', {
        method: 'put',
        body: modalForm
    })

    await refresh()

    showModal.value = false
}

</script>