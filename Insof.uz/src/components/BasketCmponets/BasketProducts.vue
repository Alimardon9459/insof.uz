<template>
    <div class="products">
        <div class="products__body">
            <div class="products__title">
                В корзине 2 товара
            </div>
            <div class="products-product">
                <div class="product__img">
                    <q-img 
                        src="https://olcha.uz/image/original/products/SkJF0ugd9f0Re05mUkLfVzPTG2C5ZnzWHHexzydC8wGG408ipNT45WbXvNEA." 
                        alt=""
                    />
                </div>
                <div class="product__info">
                    <p class="product__name">
                        Ноутбук HP 15s-eq2015ne R3-5300U 4/256GB SSD 15.6"
                    </p>
                    <p class="product__price">
                        Narxi: 15000 so'm
                    </p>
                </div>
                <div class="product__quantity">

                </div>
                <div class="product__overall-price">
                    15000 so'm
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .products{
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .products__body{
        width: 95%;
        margin-top: 50px;
    }
    .products__title{
        width: 100%;
        font-size: 40px;
    }
    .products-product{
        width: 100%;
        margin-top: 30px;
        display: flex;
        justify-content: space-between; 
        align-items: center;
    }
    .product__img{
        width: 70px;
    }

</style>