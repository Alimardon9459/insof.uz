<template>
  <div>
    <div class="bacdrop" @click="closeModall ">
      <div class="modal">
          <h1>{{header}}</h1>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:['header'],
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
  background: white
</style>
