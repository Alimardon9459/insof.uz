<template>
    <div class="fs-22px">
        {{store.count}}
        <button @click="store.increment(1)"> bos</button>
    </div>
</template>
<script setup>
    import { useCounterStore } from "../stores/index";
    const store= useCounterStore();
    store.count++
    store.increment(2)

</script>
<style scoped>
    
</style>