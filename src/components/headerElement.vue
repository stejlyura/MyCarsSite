<script setup></script>

<template>
    <div class="header_top">
        <h1>GetCars</h1>
        <ul>
            <li>About Us</li>
            <li>Lease</li>
            <li>Rent</li>
            <li>Tradde in</li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
    .header_top {
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: space-between;
        text-align: center;
        h1{
            margin-left: 20px;
        }
        ul{
            display: flex;
            text-align: center;
            align-items: center;
            margin-right: 20px;
            li{
                text-align: center;
                list-style: none;
                &:nth-last-child(-n + 3):not(:first-child) {
                    margin-left: 20px;
                }
            }
        }
    }
</style>