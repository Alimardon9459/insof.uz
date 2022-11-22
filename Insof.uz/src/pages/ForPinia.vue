<template>
    <div class="fs-22px">
        
    </div>
</template>
<script setup>  
    let a=0
    let sin = setInterval(() => {
        a++
        console.log(a);
    }, 500);
    let cos = setInterval(() => {
        if(a>5){
            clearInterval(sin)
        }
        console.log("aa");
    }, 500);
    
    setTimeout(() => {
        clearInterval(cos)
    }, 10000);

</script>
<style scoped>
    
</style>