<template>
    <div class="mt4">
        <h1>Sửa Khu Vực</h1>
        <form @submit="updateArea">
            <div class="mb-3">
                <label for="area" class="form-label">Tên Khu Vực</label>
                <input type="text" class="form-control" v-model="area.area" id="area" name="area">
            </div>
            <button type="submit" class="btn btn-primary">Lưu Lại</button>
        </form>
        <h1>{{ area.area }}</h1>
    </div>
</template>


<script setup>
const route = useRoute()
const runtimeConfig = useRuntimeConfig()

const { data: area } = await useFetch(`${runtimeConfig.public.apiBase}/areas/${route.params.area_slug}`, { method: 'get' })

const updateArea = async (event) => {
    event.preventDefault();
    const { data: areaUpdate } = await useFetch(`${runtimeConfig.public.apiBase}/areas/${area.value._id}`, { method: 'put', body: area })

    if (areaUpdate.value) {
        navigateTo('/areas/listAreas')
    }
}
</script>

<style></style>