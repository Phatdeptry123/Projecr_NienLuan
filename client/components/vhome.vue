<template>
    <div class="row ">
        <div class="col-12 col-md-6 col-lg-4" v-for="i in tours" :key="i._id">
            <div @click="navigateTo(`/tours/${i.tour_slug}`)" class="card" style="width: 18rem;">
                <img :src="i.tour_image" class="card-img-top" alt="Card img">
                <div class="card-body">
                    <h5 class="card-title">{{ i.tour_name }}</h5>
                    <p class="card-text">{{ i.tour_description }}</p>
                    <a href="" class="btn btn-primary">Tìm Hiểu Tour</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig()

const { data: tours } = await useFetch(`${runtimeConfig.public.apiBase}/tours/find-all`,
    { method: 'get' })

</script>

<style></style>