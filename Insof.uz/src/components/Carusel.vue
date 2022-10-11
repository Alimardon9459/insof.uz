<template>
  <div class="q-mb-xl q-mt-md border">
    <q-carousel arrows animated navigation swipeable autoplay v-model="slide" height="400px" class="rounded-borders">
      <q-carousel-slide
        name="first"
        img-src="https://cdn.quasar.dev/img/mountains.jpg"
      >
      
      </q-carousel-slide>
      <q-carousel-slide
        name="second"
        img-src="https://cdn.quasar.dev/img/parallax1.jpg"
      >
       
      </q-carousel-slide>
      <q-carousel-slide
        name="third"
        img-src="https://cdn.quasar.dev/img/parallax2.jpg"
      >
       
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>
  <script>
import { ref } from "vue";

export default {
  setup() {
    return {
      slide: ref("first"),
    };
  },
};
</script>
    <style lang="sass" scoped>
.custom-caption
    text-align: center
    padding: 12px
    color: white
    background-color: rgba(0, 0, 0, .3)
.border
    border-radius: 10%
.q-btn.q-icon
    font-size: 1em
</style>