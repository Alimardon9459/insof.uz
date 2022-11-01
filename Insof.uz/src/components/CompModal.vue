<template >
  <div>
      <q-card style="width: 700px; max-width: 80vw;">
        <q-card-section>
          <div class="text-h6">Medium</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Click/Tap on the backdrop.
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
    setup(){
      return{
        medium: ref(true),
      }
    }
}
</script>
<style>

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
