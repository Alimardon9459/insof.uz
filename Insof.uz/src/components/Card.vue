<template>
  <div class="wrapper">
    <div class="product">
      <div class="product__main">
        <a href="#" class="product__link" >
            <img class="img" src="https://olcha.uz/image/425x425/products/rEES4fDb0cYy8rm4TsLWVIoh1FQeCHDj7WIT4d977eQpHrVrxNQwJxKJVDzL."
            width="200"
            height="200"
            />

        </a>
        <div class="product__title">
            Smartphone
        </div>
        <div class="product__price ">
            <div class="product__price none-discount">
                500.000 so'm
            </div>
            <div class="product__price discount">
                450.000 so'm
            </div>
        </div>
        <div class="product__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aliquid necessitatibus repellendus distinctio quis exercitationem rem qui deserunt officiis reiciendis?
        </div>
        <div class="button">
            <q-btn>button</q-btn>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    setup() {
        
    },
}
</script>
<style lang="sass" scoped>
.product
    width: 350px
    height: 800px
    border: 1px solid #000
    border-radius: 10px

.product__link
    width: 100%
    height: 200px
    display: flex
    justify-content: center
    align-items: center
.product__price.discount
    width: 40%
    background-color: red
    text-align: center
    border-radius: 5px
</style>