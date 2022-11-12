<template>
    <div class="fs-22px">
        {{store.ProductsApi}} 
        <br>
        <div class="bg-red mt-50px">
            {{store.DiscountProducts}}
        </div>
    </div>
</template>
<script setup>
import { useCounterStore } from "../stores/index";
    const store = useCounterStore();
    store.getProductsApi()
    store.getDiscountProducts()
    let timerId = setInterval(() => {store.getDiscountProducts()}, 1000);
    setTimeout(() => { clearInterval(timerId) }, 2000);

    // for(let i =0 ; i<1 ; i++){
    //     if(model=='cheg'){
    //         if(this.ProductsApi[i].chegirma_foizi>0){
    //             this.DiscountProducts.push(this.ProductsApi[i]) 
    //         }
    //     }
    //     else if(model=='mega_cheg'){
    //         if(this.ProductsApi[i].chegirma_foizi>10){
    //             this.DiscountProducts.push(this.ProductsApi[i]) 
    //         }
    //     }
    //     else{
    //         if(this.ProductsApi[i].xaridorgir==true){
    //             this.BuyerProducts .push(this.ProductsApi[i]) 
    //         }
    //     }

    // }
    const apipro=store.ProductsApi
    
</script>
<style scoped>
    
</style>