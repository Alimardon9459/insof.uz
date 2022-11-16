<template>
  <div>
    <div>
      <q-dialog  v-model="medium" >
        <comp-modal/>
      </q-dialog>
    </div>
    <div class="container">
      <div class="title">
        O'xshash mahsulotlar
      </div>
      <div class="catalog row">
        <div class="product shadow-3" v-for="i in 12" :key="i">
          <div class="product__main">
            <div class="discount">
              <div class="discount__mark">
                Chegirma
              </div>
              <div class="discount__persent">
                17%
              </div>
            </div>
            <a href="#" class="product__link">
              <img class="img"
                src="https://olcha.uz/image/425x425/products/rEES4fDb0cYy8rm4TsLWVIoh1FQeCHDj7WIT4d977eQpHrVrxNQwJxKJVDzL."
                width="150" height="150" alt="title" />
            </a>
            <div class="product__spacer">
              <div class="product__title text-h6">Smartphone</div>
            </div>
            <div class="product__spacer">
              <div class="product__prices">
                <div class="product__price none-discount"> <del>500.000 so'm</del> </div>
                <div class="product__price with-discount">450.000 so'm</div>
              </div>
            </div>
            <div class="product__spacer">
              <div class="product__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </div>
            <div class="product__spacer">
              <div class="button row justify-center">
                <q-btn   @click="medium = true" class="btn shadow-7 mb-20px" padding="5px 40px 5px 40px" >button </q-btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CompModal from './CompModal.vue'

export default {
  components: { CompModal },

  data() {
    return {
       medium: false
    }
  },
  methods: {
    // showModal() {
    //   // this.showModal = !this.showModal
    //   this.showModal = true
    // }
  },
}
</script>
<style scoped lang="sass">
.container
  height: auto
  // background: aqua
  // margin-top: 50px
.title
  font-size: 1.875rem
  font-weight: 560
.catalog
  width: 100%
.wrapper
    width: 100%
    margin: 0 auto
    display: flex
    justify-content: space-between
    align-items: center
    flex-wrap: wrap
.product
    width: 200px
    //height: 400px
    border: 1px solid #fff
    // box-shadow: 5px 5px 5px 5px rgba(0,0,0, .15)
    border-radius: 10px
    margin: 20px auto
    // margin: 20px 20px 20px 0
.product__main
    width: 90%
    margin: 0 auto
    display: flex
    flex-direction: column
    justify-content: center
    // align-items: center
    // letter-spacing: 1em
    // line-height: 1.75em


.discount
    width: 100%
    // height: 35px
    display: flex
    justify-content: space-between
    align-items: center
    // background: linear-gradient(89.97deg, #33042e 52.52%, #8f1182 110.06%)
    color: #fff
    margin: 10px 0
.discount__mark, .discount__persent
    background-color: red
    padding: 0 10px
    border-radius: 10px
    text-align: center
.product__link
    width: 100%
    height: 150px
    display: flex
    justify-content: center
    align-items: center
.product__price
    width: 90%
    text-align: center
    font-size: 1.1em
    font-weight: bold
.product__description
    width: 100%
    height: 70px
    margin-top: 10px
.with-discount
    // background: linear-gradient(89.97deg, #33042e 52.52%, #8f1182 110.06%)
    background-color: red
    border-radius: 5px
    color: #fff

</style>
