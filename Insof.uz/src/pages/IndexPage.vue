<template>
  <q-page class="">
    <Carusel/>
    <div class="heading text-h4 ">
      Catgoriyalar
    </div>
    <CategoryCards/>
    <div class="heading text-h4 q-mt-xl">
      Chegirmalar
    </div>
    <Suspense>
      <Card type="discount"/>
    </Suspense>
    <div class="heading text-h4 q-mt-xl">
      Mega chegirmalar Chegirmalar
    </div>
    <Suspense>    
      <Card type="mega_discount" />
    </Suspense>
    <div class="heading text-h4 q-mt-xl">
      Siz uchun kerakli maxsulotlar
    </div>
    <Suspense> 
      <Card type="necessary"/>
    </Suspense>
    
  </q-page>
</template>

<script setup>
  import { defineComponent } from 'vue'
  import Carusel from '../components/Carusel'
  import CategoryCards from 'src/components/Category-cards'
  import Card from 'src/components/Card'

</script>
<style lang="sass"  scoped>
.heading
  color: #8f1182

</style>