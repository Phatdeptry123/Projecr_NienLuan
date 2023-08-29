<template>
    <div class="mt4">
        <h1>Thêm Khu Vực Mới</h1>
        <form @submit="addArea">
            <div class="mb-3">
                <label class="form-label">Tên Khu Vực</label>
                <input v-model="formData.area" type="text" class="form-control" id="area" name="area">
            </div>
            <button type="submit" class="btn btn-primary">Thêm</button>
        </form>
    </div>
</template>

<script setup>

const formData = ref({
    area: '',
})

const runtimeConfig = useRuntimeConfig()
const addArea = async (event) => {
    event.preventDefault();
    const { data: areas } = await useFetch(`${runtimeConfig.public.apiBase}/areas/create`, { method: 'post', body: formData.value })
    alert("Thêm Thành Công")
}

</script>

<style></style>