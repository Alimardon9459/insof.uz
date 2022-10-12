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
    <Card/>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import Carusel from '../components/Carusel'
import CategoryCards from 'src/components/Category-cards'
import Card from 'src/components/Card'
export default defineComponent({
  name: 'IndexPage',
  components:{
    Carusel,
    CategoryCards,
    Card
}
})
</script>
<style lang="sass"  scoped>
.heading
  color: #8f1182

</style>