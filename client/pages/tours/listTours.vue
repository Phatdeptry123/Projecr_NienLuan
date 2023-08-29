<template>
    <div class="container">
        <ul class="list-group">
            <div class="row mt-4">
                <h2 class="col-6">Danh Sách Khóa Học</h2>
                <div @click="navigateTo('/tours/addTour')" class="btn btn-success col-6">
                    <nuxtLink class="nav-link active" aria-current="page" href="">Thêm Tour Mới</nuxtLink>
                </div>
            </div>

            <li v-for="i in tours" :key="i._id"
                class="list-group-item align-item d-flex justify-content-between align-items-center">
                <h4></h4>
                <div>
                    <h4 class="">{{ i.tour_name }}</h4>
                </div>
                <div>
                    <nuxtLink :to="`/tours/updateTour-${i.tour_slug}`" class="btn btn-primary">Sửa</nuxtLink>
                    <button @click="deleteTour(i._id)" class="btn btn-danger">Xóa</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig()

const { data: tours, refresh: refreshTours } = await useFetch(`${runtimeConfig.public.apiBase}/tours/find-all`, { method: 'get' })
const deleteTour = async (id) => {
    await useFetch(`${runtimeConfig.public.apiBase}/tours/${id}`, { method: 'delete' })
    await refreshTours()
}
</script>

<style></style>