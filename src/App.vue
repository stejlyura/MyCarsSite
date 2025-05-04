<script setup lang="ts">
    import { CarsMass } from "./typescript_code/base.ts";
    import headerElement from "../components/headerElement.vue";
</script>

<template>
    <header>
        <headerElement></headerElement>
    </header>
    <div class="mainBody">
        <div v-for="(car, index) in CarsMass" :key="index" class="car_card">
            <div class="carCard">
                <h1>{{ car.brend }}</h1>
                <p>{{ car.model }}</p>
                <h2>{{ car.color }}</h2>
                <h3>{{ car.price }}</h3>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @import './assets/carCard.scss';
</style>
