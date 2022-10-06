<template>
  <q-page class="">
    <Carusel/>
    <CategoryCards/>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import Carusel from '../components/Carusel'
import CategoryCards from 'src/components/Category-cards'
export default defineComponent({
  name: 'IndexPage',
  components:{
    Carusel,
    CategoryCards
}
})
</script>
<style  scoped>

</style>