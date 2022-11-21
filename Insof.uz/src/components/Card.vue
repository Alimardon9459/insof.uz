<template>
  <div class="wrapper">
    <!--  -->
    <div class="product shadow-3"  v-for=" product , i  in products" :key="i" >
      <div class="product__main">
        <div v-if="product.chegirma_foizi.length>=1 ?true :false" class="discount">
          <div  class="discount__mark">
            Chegirma
          </div>
          <div  class="discount__persent">
            {{product.chegirma_foizi}}%
          </div>
        </div>
        <div v-if="product.chegirma_foizi.length<1 ?true :false" class=" h-50px w-100pr">
        </div>
          <router-link :to="'/detail/'+ product.id" class="product__link" >
            <q-img
              class="img"
              :src="product.rasmlari[0].link"
              width="200"
              height="200px"
              alt="title"
            />
          </router-link>
        <div class="product__spacer">
          <div class="product__title text-h5">{{product.nomi}}</div>
        </div>
        <div class="product__spacer">
          <div class="product__prices">
            <div v-if="product.chegirma_narx.length>1 ?true :false" class="product__price none-discount"> <del>{{product.narx}} so'm</del> </div>
            <div v-if="product.chegirma_narx.length>1 ?true :false" class="product__price with-discount">{{product.chegirma_narx}} so'm</div>
            <div v-if="product.chegirma_narx.length<1 ?true :false" class=" mt-30px product__price with-discount">{{product.narx}} so'm</div>
          </div>
        </div>
        <div class="product__spacer">
          <div class="product__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
        <div class="product__spacer">
          <div class="button">
            <q-btn rounded class="btn full-width shadow-7">button</q-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { ref } from "vue";  
  import { useCounterStore } from "../stores/index";
  const store = useCounterStore();
  
  const props = defineProps({
    type: String
  })

    const products_api = ref([])
    const products = ref([])
    // bekentdan malumotlar kelishi uchun 2 sekund kutadi va 1 s oraliqda qayta ishlaydi
    let timerId = setInterval(() => {
      products_api.value=store.ProductsApi
      return products_api
    }, 1000);

    // maxsulotlarni saralash uchun
    function GetFilterProducts(){
      
      if(props.type=='discount'){
        products.value=products_api.value.filter(function(elem){
          return elem.chegirma_foizi>0 && elem.chegirma_foizi<10
        })
      }
      else if(props.type=='mega_discount'){
        products.value=products_api.value.filter(function(elem){
          return elem.chegirma_foizi>=10
        })
      }
      else if(props.type=='necessary'){
        products.value=products_api.value.filter(function(elem){
          return elem
        })
      }
    
    }

    setTimeout(() => { 
      clearInterval(timerId) ;
      GetFilterProducts() ;
    }, 3000);

    
</script>
<style lang="sass" scoped>
.wrapper
    width: 100%
    margin: 0 auto
    display: flex
    justify-content: space-between
    align-items: center
    flex-wrap: wrap
.product
    width: 200px
    border: 1px solid #fffff
    border-radius: 10px
    margin: 20px auto
    // margin: 20px 20px 20px 0

.product__main
    width: 90%
    margin: 0 auto
    display: flex
    flex-direction: column
    justify-content: center
    // align-items: center
    // letter-spacing: 1em
    line-height: 1.75em
  
.product__spacer
    padding-top: 10px
.discount
    width: 100%
    height: 35px
    display: flex
    justify-content: space-between
    align-items: center
    // background: linear-gradient(89.97deg, #33042e 52.52%, #8f1182 110.06%)
    color: #fff
    margin: 10px 0
.discount__mark, .discount__persent
    background-color: red
    padding: 0 10px
    border-radius: 10px
    text-align: center
.product__link
    width: 100%
    height: 200px
    display: flex
    justify-content: center
    align-items: center
.product__price
    width: 90%
    text-align: center
    font-size: 1.2em
    font-weight: bold
.product__description
    width: 100%
    height: 70px
    margin-top: 10px
.with-discount
    // background: linear-gradient(89.97deg, #33042e 52.52%, #8f1182 110.06%)
    background-color: red
    border-radius: 5px
    color: #fff
.button
    width: 80%
    margin: 0 auto
    margin-bottom: 20px
    display: flex
    justify-content: center
.btn
    background: linear-gradient(89.97deg, #33042e 52.52%, #8f1182 110.06%)
    color: #fff

</style>
