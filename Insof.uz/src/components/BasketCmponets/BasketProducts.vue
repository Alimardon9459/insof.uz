<template>
  <div class="products">
    <div class="products__body">
      <div class="products__title">В корзине 2 товара</div>
        <div class="products__line q-mt-md">
            <q-separator />
        </div>
      <div class="products-product" v-for="i in 4" :key="i">
        <div class="product">
            <div class="product__img">
                <q-img
                    src="https://olcha.uz/image/original/products/SkJF0ugd9f0Re05mUkLfVzPTG2C5ZnzWHHexzydC8wGG408ipNT45WbXvNEA."
                    alt=""
                />
            </div>
            <div class="product__info">
                <p class="product__name">Ноутбук HP</p>
                <p class="product__price">Narxi: 15000 so'm</p>
            </div>
            <div class="product__quantity">
                <q-icon name="remove_circle_outline" size="22px" />
                <span class="quantity"> 5 </span>
                <q-icon name="add_circle_outline" size="22px" color="red" />
            </div>
            <div class="product__overall-price">15000 so'm</div>
            <div class="product__delete">
                <q-icon name="close" size="25px" color="grey" />
            </div>
        </div>
        <div class="product__line mt-10px">
          <q-separator />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.products {
  width: 100%;
  display: flex;
  justify-content: center;
}

.products__body {
  width: 95%;
  margin-top: 50px;
}

.products__title {
  width: 100%;
  font-size: 40px;
}

.product {
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.product__img {
  width: 70px;
}

.product__info {
  width: 30%;
  font-size: 15px;
  color: rgb(83, 80, 80);
}

.product__quantity {
  width: 120px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-radius: 50px;
  border: solid 1px grey;
  box-shadow: 0px 0px 8px 0px grey;
}
.quantity {
  font-size: 18px;
}
@media screen and (max-width:500px) {
    .product{
        flex-wrap: wrap;
    }
    .product :nth-child(1) { order: 1; }
    .product :nth-child(2) { order: 2; }
    .product :nth-child(3) { order: 5; }
    .product :nth-child(4) { order: 3; }
    .product :nth-child(5) { order: 4; }
    .product__quantity{
        width: 50%;
    }
}
</style>