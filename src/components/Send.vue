<template>
    <div class="sendButton">
        <Arrow></Arrow>
    </div>
</template>

<script>
import Arrow from '../assets/arrow.vue';

export default {
    components:{
        Arrow
    }
}
</script>

<style scoped>
.sendButton {
    border-radius: 100%;
    width: 50px;
    height: 50px;
    background-color: #613DC1;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>