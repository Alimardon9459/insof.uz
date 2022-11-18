<template >
</template>

<style scoped lang="sass">
.modal__img
  width: 120px
  height: 120px
.modal__text
  width: 300px
  height: auto
.modal__sena
  width: 200px
  height: auto
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
  font-weight: 500
.modal__sena--active
  width: 120px
  height: 38px
  border: 1px solid #111
  .q-btn:before
    box-shadow: none
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
