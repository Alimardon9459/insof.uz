<template>
    <div class="wrapper">
        <div class="card">
            <div class="product">
                <div class="product__main">
                    <div class="product__title">
                        Title
                    </div>
                    <div class="product__wrapper">
                        <div class="img">
                            <img src="https://olcha.uz/image/425x425/products/rEES4fDb0cYy8rm4TsLWVIoh1FQeCHDj7WIT4d977eQpHrVrxNQwJxKJVDzL." alt="" 
                            width="100%"/>
                        </div>

                        <div class="product__info">
                           
                            <div class="product__prices">
                                <div class="product__price none-discount"> <del>500.000 so'm</del> </div>
                                <div class="product__price with-discount">450.000 so'm</div>
                            </div>
                            <div class="product__description">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, corrupti debitis! Eius at nostrum, possimus distinctio totam quasi nisi velit, molestiae quae sit eligendi numquam quas reprehenderit facilis iste itaque?
                            </div>
                        </div>
                        
                       
                    </div>
                    <div class="resent">
                        <Card/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Card from '../components/Card'
export default {
    components:{
        Card
    },
    setup() {
        
    },
}
</script>
<style lang="sass" scoped>
.product__wrapper
    width: 100%
    display: flex
    justify-content: space-between
    flex-wrap: wrap

.product__info
    max-width: 500px
    flex-grow: 1
.resent
    display: flex
    flex-direction: column
</style>