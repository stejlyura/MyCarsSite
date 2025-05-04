<script setup></script>

<template>
    <div class="header_top">
        <h1 class="logoText">Get premium Cars</h1>
        <ul>
            <li>About us</li>
            <li>Lease</li>
            <li>Rent</li>
            <li>Tradde in</li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
    .header_top {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: space-between;
        text-align: center;
        color: aliceblue;
        flex-direction: column-reverse;
        .logoText{
            margin-top:  30px;
            font-family: PlayfairDisplay;
            font-size: 3rem;
        }
        ul{
            padding-top: 30px;
            display: flex;
            justify-content: center;
            text-align: center;
            align-items: center;
            li{
                font-size: 1.1rem;
                font-family: PlayfairDisplay;
                text-align: center;
                list-style: none;
                &:nth-last-child(-n + 3):not(:first-child) {
                    margin-left: 20px;
                }
            }
        }
    }
</style>