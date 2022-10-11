<template>
  <q-page class="">
    <Carusel/>
    <CategoryCards/>
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
<style  scoped>

</style>