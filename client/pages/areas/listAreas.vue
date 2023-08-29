<template>
    <div class="container">
        <ul class="list-group">
            <div class="row mt-4">
                <h2 class="col-6">Danh Sách Khu Vực</h2>
                <div @click="navigateTo('/areas/addArea')" class="btn btn-success col-6">
                    <nuxtLink class="nav-link active" aria-current="page" href="">Thêm Khu Vực Mới</nuxtLink>
                </div>
            </div>

            <li v-for="i in areas" :key="i._id"
                class="list-group-item align-item d-flex justify-content-between align-items-center">
                <h4></h4>
                <div>
                    <h4 class="">{{ i.area }}</h4>
                </div>
                <div>
                    <nuxtLink :to="`/areas/updateAreas-${i.area_slug}`" class="btn btn-primary">Sửa</nuxtLink>
                    <button @click="deleteArea(i._id)" class="btn btn-danger">Xóa</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig()

const { data: areas, refresh: refreshAreas } = await useFetch(`${runtimeConfig.public.apiBase}/areas`, { method: 'get' })
const deleteArea = async (id) => {
    await useFetch(`${runtimeConfig.public.apiBase}/areas/${id}`, { method: 'delete' })
    await refreshAreas()
}
</script>

<style></style>