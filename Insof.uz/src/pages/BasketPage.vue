<template >
    <div class="w-100pr">
        <BasketProducts class="basket-products"/>
    </div>
</template>
<script>
import BasketProducts from 'src/components/BasketCmponets/BasketProducts.vue';

export default {
    components: { BasketProducts }
}
</script>
<style scoped>
    .basket-products{
        width: 60%;
    }
</style>