<template>
  <div>
    <div class="container">
      <h1 class="title">{{ product.nomi}}</h1>
      <div class="content  row  justify-between items-start content-start">
        <div class="card">
          <div class="card__carusel">
            <comp-carusel :img_api="product.rasmlari" />
          </div>
        </div>
        <div class="picture">
          <div class="picture__card">
              <p v-if="product.chegirma_foizi<1 ?true :false" class="picture__number--active text-h5"> Narxi:{{ product.narx}} so'm </p>
              <p v-if="product.chegirma_foizi>=1 ?true :false" class="picture__number--active text-h5"> Narxi: <del>{{ product.narx}} so'm</del> </p>
              <p v-if="product.chegirma_foizi>=1 ?true :false" class="picture__number--active text-h5"> Chegirma Narxi:{{ product.chegirma_narx}} so'm </p>
              <p class="text-weight-bold">Mahsulot haqida qisqacha</p>
              <p style="color: #333;">Kafolat muddati (oy): 12</p>
              <p style="color: #8a8a8a; font-size: 0.8rem ; text-align: left;">Ta'sirchan suratga olish sifati 108 megapikselli asosiy kamera 1/1,52 dyuymli Samsung HM2 sensori bilan jihozlangan va katta 2,1 mkm pikselni ta'minlovchi 9-in-1 pikselni birlashtirish texnologiyasini qo'llab-quvvatlaydi. Ikkilamchi mahalliy ISO bilan siz past yorug'lik sharoitida ham shovqinni kamaytiradigan aniq va teksturali tasvirlarni olishingiz mumkin. Shuningdek, u 108 megapikselli tasvirlarni to‘g‘ridan-to‘g‘ri chiqarish imkonini beradi, shu bilan birga ko‘proq tafsilotlarni saqlab qoladi, bu esa yaxshiroq kompozitsiya uchun masshtablash yoki kesish uchun qulaydir.</p>
          </div>
          <div class="button  row  justify-between items-start content-start q-mt-lg" style="box-sizing: border-box;">
            <button class="button__active">Savatchaga qo'shish</button>
            <button class="button__active--2">Bo'lib to'lash</button>
            <button class="button__active--3">Bir kilikda sotib olish</button>
          </div>
        </div>
  
          <div class="reklama">
              <!-- reklama uchun joy -->
          </div>
      </div>

    </div>
    
    <comp-cards/>
  
  </div>
</template>
<script setup>
  
  import CompCards from '../components/CompCards.vue'
  import CompCarusel from '../components/СompCarusel'
  import { useRoute } from 'vue-router';
  import { useCounterStore } from "../stores/index";
  import { ref } from "vue"
  const store = useCounterStore();
  let id = useRoute().params.id
  const product = ref([])
  setTimeout(() => {
    product.value=store.ProductsApi[id-1]
  }, 500);
  
  


</script>
<style scoped>


  .title {
    font-size: 1.875rem;
    font-weight: 560;
    line-height: 2.25rem;
    box-sizing: border-box;
  }

  .content {
    width: 100%;
    height: 100%;
    /* background: rgb(229, 223, 223); */
  }

  .card {
    width: 360px;
    height: 100%;
    /* background: red; */
  }

  .card__carusel {
    width: 100%;
    height: 40%;
  }
  .picture{
    width: 400px;
    height: 100%;
    /* background: blue; */
  }
  .reklama{
    width: 360px;
    /* background: yellow; */
    border: 2px solid black;
  }
  .button__active{
    font-size: 12px;
    border-radius: 18px;
    padding: 7px 8px;
    border: none;
    background: #EB1537;
    border:1px solid #EB1537;
    color: #fff;
    transition:  0.5s ease;
  }
  .button__active--2{
    font-size: 12px;
    border-radius: 18px;
    padding: 7px 8px;
    border: none;
    background: #12BF6C;
    color: #fff;
    border: 1px solid #12BF6C ;
    transition:  0.5s ease;
  }
  .button__active--3{
    font-size: 12px;
    border-radius: 18px;
    padding: 7px 8px;
    border: none;
    background: #333;
    color: #fff;
    border: 1px solid #333;
    transition:  0.5s ease;
  }
  .button__active:hover{
    background: #fff;
    color: #EB1537;
    border:1px solid #EB1537;
    cursor: pointer;
  }
  .button__active--2:hover{
    background: #fff;
    color: #12BF6C;
    border:1px solid #12BF6C;
    padding: 7px 8px;
    cursor: pointer;
  }
  .button__active--3:hover{
    background: #fff;
    color: #333;
    border:1px solid #333;
    padding: 7px 8px;
    cursor: pointer;
  }
</style>
























































































  <!-- <template>
    <div class="wrapper">
      <div class="card">
        <div class="product">
          <div class="product__main">
            <div class="product__title">
              Title
            </div>
            <div class="product__wrapper">
              <div class="img">
                <img
                  src="https://olcha.uz/image/425x425/products/rEES4fDb0cYy8rm4TsLWVIoh1FQeCHDj7WIT4d977eQpHrVrxNQwJxKJVDzL."
                  alt="" width="100%" />
              </div>

              <div class="product__info">

                <div class="product__prices">
                  <div class="product__price none-discount"> <del>500.000 so'm</del> </div>
                  <div class="product__price with-discount">450.000 so'm</div>
                </div>
                <div class="product__description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, corrupti debitis! Eius at nostrum,
                  possimus distinctio totam quasi nisi velit, molestiae quae sit eligendi numquam quas reprehenderit
                  facilis iste itaque?
                </div>
              </div>


            </div>
            <div class="resent">
              <Card />
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  import Card from '../components/Card'
  export default {
    components: {
      Card
    },
    setup() {

    },
  }
  </script>
  <style lang="sass" scoped>
  .product__wrapper
      width: 100%
      display: flex
      justify-content: space-between
      flex-wrap: wrap

  .product__info
      max-width: 500px
      flex-grow: 1
  .resent
      display: flex
      flex-direction: column
  </style> -->




























































