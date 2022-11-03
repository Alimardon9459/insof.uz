<template >
  <q-card style="width: 700px; max-width: 80vw;">
    <q-card-section>
      <div class="text-h6">Bo'lib to'lash</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <div class="  row  justify-between items-start content-between">
        <div class="modal__img">
          <q-img
            src="https://olcha.uz/image/original/products/QS4aQGLHtrEp6g2wvLm34DDJAFzTVKW5oGzstyAvb6C8ijhg06Ei0H7Ctqwv.png">
          </q-img>
        </div>
        <div class="modal__text">
          <p class="p-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, /neque!</p>
          <p style="color: #999999;">Artikul:</p>
          <button class="button__active--2">Sevimlilarga qo'shish</button>
        </div>
        <div class="modal__sena">
          <!-- incriment va decrementni qo'shigin -->
        </div>
      </div>
    </q-card-section>

    <q-card-actions align="right" class="bg-white text-teal">
      <q-btn flat label="OK" v-close-popup />
    </q-card-actions>
  </q-card>
</template>
<script >
import { ref } from 'vue'
export default {
  setup() {
    return {
      medium: ref(true),
    }
  }
}
</script>
<style scoped lang="sass">
.modal__img
  width: 120px
  height: 120px
.modal__text
  width: 300px
  height: auto
.modal__sena
  width: 200px
  height: 120px
  background: red
.button__active--2
    font-size: 12px
    border-radius: 18px
    padding: 7px 8px
    border: none
    background: #12BF6C
    color: #fff
    border: 1px solid #12BF6C
    transition:  0.5s ease
.button__active--2:hover
    background: #fff
    color: #12BF6C
    border:1px solid #12BF6C
    cursor: pointer
.p-1
  color: #111
  // font-feature-settings: "pnum" on,"lnum" on
  font-weight: 500
</style>






































<!-- <template>
  <div>
    <q-dialog class="bacdrop" v-model="showModal">
      <div class="modal">
          <h1>{{header}}</h1>
      </div>
      <q-btn @click="showModal = false">yopish</q-btn>
    </q-dialog>
    <q-btn @click="showModal = true">ochish</q-btn>
  </div>
</template>
<script>
export default {
  data(){
    return{
      showModal: false
    }
  },
  props:['header', 'showModal'],
  methods: {
   closeModall(){
    this.$emit('close')
   }
  },
}
</script>
<style scoped lang="sass">
.bacdrop
  top: 0
  position: fixed
  background-color: rgba(0,0,0,0.5 )
  width: 100%
  height: 100%
.modal
  bottom: 0
  width: 80%
  height: 500px
  margin: 0 auto
  background-color: white
</style> -->
