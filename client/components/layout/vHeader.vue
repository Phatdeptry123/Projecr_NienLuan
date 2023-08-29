<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <nuxtLink @click="navigateTo('/')" class="navbar-brand" href="">PT_Travel</nuxtLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <nuxtLink @click="navigateTo('/')" class="nav-link active" aria-current="page" href="">Home
                        </nuxtLink>
                    </li>
                    <li class="nav-item">
                        <nuxtLink @click="navigateTo('/tours/listTours')" href="" class=" nav-link active"
                            aria-current="page">Danh Sách Tour</nuxtLink>
                    </li>
                    <li class="nav-item">
                        <nuxtLink @click="navigateTo('/areas/listAreas')" href="" class=" nav-link active"
                            aria-current="page">Danh Sách Khu Vực</nuxtLink>
                    </li>

                </ul>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
</template>

<script setup>

</script>

<style></style>