<script setup lang="ts">
    import { CarsMass } from "./typescript_code/base.ts";
</script>

<template>
    <div v-for="(value, key) in CarsMass" class="car_card">
        <h1>{{ CarsMass.brend }}</h1>
    </div>
    <h1>{{ CarsMass }}</h1>
</template>

<style scoped lang="scss">

</style>
