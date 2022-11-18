<template>
  <div>
    <q-carousel
      swipeable
      animated
      v-model="slide"
      thumbnails
      infinite
      
    >
      <q-carousel-slide 
        v-for="img , i in props.img_api"
        :key="i"
        :name="i+1"
        :img-src="img.link" 
      />
      
    </q-carousel>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  let slide = ref(1)
  const props = defineProps({
    img_api: Array
  })
</script>
