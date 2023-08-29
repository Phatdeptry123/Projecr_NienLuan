<template>
    <div class="container">
        <ul class="list-group">
            <div class="row mt-4">
                <h2 class="col-6">Danh Sách Người Dùng</h2>
                <div @click="navigateTo('/users/addUser')" class="btn btn-success col-6">
                    <nuxtLink class="nav-link active" aria-current="page" href="">Thêm Người Dùng Mới</nuxtLink>
                </div>
            </div>

            <li v-for="i in users" :key="i._id"
                class="list-group-item align-item d-flex justify-content-between align-items-center">
                <h4></h4>
                <div>
                    <h4 class="">{{ i.username }}</h4>
                </div>
                <!-- <div>
                    <nuxtLink :to="`/tours/updateTours-${i.tour_slug}`" class="btn btn-primary">Sửa</nuxtLink>
                    <button @click="deleteTour(i._id)" class="btn btn-danger">Xóa</button>
                </div> -->
            </li>
        </ul>
    </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig()

const { data: users, refresh: refreshUsers } = await useFetch(`${runtimeConfig.public.apiBase}/users/`, { method: 'get' })
// const deleteTour = async (id) => {
//     await useFetch(`${runtimeConfig.public.apiBase}/tours/${id}`, { method: 'delete' })
//     await refreshTours()
// }
</script>

<style></style>