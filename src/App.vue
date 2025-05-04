<script setup lang="ts">
    import { CarsMass } from "./typescript_code/base.ts";
    import headerElement from "./components/headerElement.vue";
</script>

<template>
    <header>
        <headerElement></headerElement>
    </header>

    <div class="imageMessage">
        <picture>
            <source srcset="../src/images/cars/porshe1.webp" type="image/webp">
        </picture>
    </div>
    <div class="carCard">
        <div class="card">
            <h1>{{ CarsMass[0].brend }}</h1>
            <h2>{{ CarsMass[0].model }}</h2>
            <p>{{ CarsMass[0].color }}</p>
            <h4>{{ CarsMass[0].price }}</h4>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @import "../src/assets/carCard.scss";
    @import "../src/assets/imageMessage.scss";
</style>
