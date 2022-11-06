<template>
    <div class="fs-22px">
        {{store.DiscountProducts}}
        
    </div>
</template>
<script setup>
import { useCounterStore } from "../stores/index";
    const store = useCounterStore();
    store.getProductsApi();
    store.getDiscountProducts()
    
</script>
<style scoped>
    
</style>