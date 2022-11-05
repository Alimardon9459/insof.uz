<template>
    <div>
        <div class="title text-center mt-30px fs-28px">
            Sizning buyurtmangiz.
        </div>
        <div class=" fs-22px text-grey-7">
            Buyurtmangiz Statusi
        </div>
        <div class="row justify-center w-100pr  h-400px ">
            <div class="w-30pr h-300px ">
                <img src="https://media.tenor.com/Fo2Sp5pdQO0AAAAi/mellydia-mellydia-skincare.gif" alt="" class="w-100pr h-100pr">
            </div>
            
            <div class="w-100pr text-center fs-25px">
                Sizning maxsulotingiz qadoqlanmoqda . . .
            </div>
        </div>
       
        <div class="mapouter mt-30px">
            <div class="gmap_canvas">
                <iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=1200&amp;height=400&amp;hl=en&amp;q=@40.3135305,71.8352692&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                <a href="https://piratebay-proxys.com/">Piratebay</a>
            </div>
        </div>

        <div class="fs-25px mt-30px" >
            Siz olgan Maxsulotlar
        </div>
        <div class="mb-50px fs-22px">
            <div class="products__body">
                    <div class="products__line q-mt-md">
                        <q-separator />
                    </div>
                <div class="products-product" v-for="i in 4" :key="i">
                    <div class="product">
                        <div class="product__img">
                            <q-img
                                src="https://olcha.uz/image/original/products/SkJF0ugd9f0Re05mUkLfVzPTG2C5ZnzWHHexzydC8wGG408ipNT45WbXvNEA."
                                alt=""
                            />
                        </div>
                        <div class="product__info">
                            <p class="product__name">Ноутбук HP</p>
                            <p class="product__price">Narxi: 15000</p>
                        </div>
                        <div class="product__quantity">
                            <span class="quantity"> Soni 5</span>
                        </div>
                        <div class="product__overall-price fs-16px text-center">
                           <span >Umumiy narxi:</span> <br> 
                           <span >15000 so'm </span>
                        </div>
                    </div>
                    <div class="product__line mt-10px">
                    <q-separator />
                    </div>
                </div>
            </div>
        </div>  
        
    </div>
</template>
<script>
import BasketProducts from 'src/components/BasketComponets/BasketProducts.vue'
export default {
  components: { BasketProducts },
    
}
</script>
<style scoped >
    .mapouter{position:relative;text-align:right;width:100%;height:450px;}
    .gmap_canvas {overflow:hidden;background:none!important;width:100%;height:450px;}
    .gmap_iframe {width:100%!important;height:450px!important;}

    .products__body {
  width: 95%;
  margin-top: 50px;
}

.product {
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.product__img {
  width: 70px;
}

.product__info {
  width: 30%;
  font-size: 15px;
  color: rgb(83, 80, 80);
}

.product__quantity {
  display: flex;
  justify-content: center;
}
.quantity {
  font-size: 18px;
}
@media screen and (min-width:500px) and (max-width:900px) {
    .w-30pr{
        width: 50%;
    }
}
@media screen and (max-width:500px) {
    .w-30pr{
        width: 90%;
        margin-right: 70px;
    }
    .quantity {
        font-size: 15px;
        margin: 0 10px 0 10px;
    }
    .fs-16px{
        font-size: 14px;
    }
}
</style>