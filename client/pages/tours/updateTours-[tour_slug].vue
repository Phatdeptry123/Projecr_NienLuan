<template>
    <div class="mt4">
        <h1>Sửa Tour</h1>
        <form @submit="updateTour">
            <div class="mb-3">
                <label for="tour_name" class="form-label">Tên Tour</label>
                <input type="text" class="form-control" v-model="tour.tour_name" id="tour_name" name="tour_name">
            </div>
            <div class="mb-3">
                <label for="tour_description" class="form-label">Mô tả</label>
                <textarea v-model="tour.tour_description" class="form-control" id="tour_description"
                    name="tour_description"></textarea>
            </div>
            <div class="mb-3">
                <label for="tour_image" class="form-label">Hình Ảnh</label>
                <input type="text" class="form-control" v-model="tour.tour_image" name="tour_image">
            </div>
            <div class="mb-3">
                <label for="tour_rate" class="form-label">đánh giá</label>
                <input type="number" class="form-control" v-model="tour.tour_rate" id="tour_rate" name="tour_rate">
            </div>
            <div class="mb-3">
                <label for="tour_price_old" class="form-label">Giá vé người cao tuổi</label>
                <input type="number" class="form-control" v-model="tour.tour_price_old" id="tour_price_old"
                    name="tour_price_old">
            </div>
            <div class="mb-3">
                <label for="tour_price_man" class="form-label">Giá vé người lớn</label>
                <input type="number" class="form-control" v-model="tour.tour_price_man" id="tour_price_man"
                    name="tour_price_man">
            </div>
            <div class="mb-3">
                <label for="tour_price_kid" class="form-label">Giá vé trẻ em</label>
                <input type="number" class="form-control" v-model="tour.tour_price_kid" id="tour_price_kid"
                    name="tour_price_kid">
            </div>
            <div class="mb-3">
                <label for="area" class="form-label">Khu Vực</label>
                <input type="text" class="form-control" v-model="tour.area" id="area" name="area">
            </div>
            <div class="mb-3">
                <label for="tour_weather" class="form-label">Thời Tiết</label>
                <input type="text" class="form-control" v-model="tour.tour_weather" id="tour_weather" name="tour_weather">
            </div>
            <button type="submit" class="btn btn-primary">Lưu Lại</button>
        </form>
        <h1>{{ tour.name }}</h1>
    </div>
</template>


<script setup>
const route = useRoute()
const runtimeConfig = useRuntimeConfig()

const { data: tour } = await useFetch(`${runtimeConfig.public.apiBase}/tours/${route.params.tour_slug}`, { method: 'get' })

const updateTour = async (event) => {
    event.preventDefault();
    const { data: tourUpdate } = await useFetch(`${runtimeConfig.public.apiBase}/tours/${tour.value._id}`, { method: 'put', body: tour })

    if (tourUpdate.value) {
        navigateTo('/tours/listTours')
    }
}
</script>

<style></style>