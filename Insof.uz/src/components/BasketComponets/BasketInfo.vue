<template >
    <div class="w-100pr info">
        <div class="info__body">
            <div class="info__data">
                <span class="data__body" > 
                    <span>Стоимость:</span> 
                    <span>20 129 711 сум</span> 
                </span>
                <span class="data__body" > 
                    <span>Скидка:</span> 
                    <span>0 сум</span> 
                </span>
                <span class="data__body" > 
                    <span>Стоимость доставки</span> 
                    <span>0 сум</span> 
                </span>
                <span class="data__body" > 
                    <span>Комиссия за доставку</span> 
                    <span>0 сум</span> 
                </span>
                
            </div>
            <q-separator class="q-mt-md" />
            <div class="info__placing-order row justify-center">
                <span class="placing-order__price" > 
                    <span>Итого:</span> 
                    <span>20 129 711 сум</span> 
                </span>
                <q-btn color="white" class="bg-red mt-20px" rounded to="/registration" >ОФОРМИТЬ ЗАКАЗ</q-btn>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
    .info{
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .info__body{
        width: 90%;
        height: 400px;
        padding: 40px;
        border: solid 1px grey;
        border-radius: 30px;
    }
    .info__data{
        width: 100%;
    }
    .data__body{
        width: 100%;
        margin-top: 20px;
        font-size: 18px;
        display: flex;
        justify-content: space-between;
    }
    .placing-order__price{
        width: 100%;
        margin-top: 20px;
        font-size: 22px;
        display: flex;
        justify-content: space-between;
    }
    @media screen and (max-width:500px) {
        .info__body{
            
            height: 340px;
            padding: 20px;
           
        }
        .data__body{
            font-size: 16px;
        }
        .placing-order__price{
            font-size: 18px;
            
        }
    }
</style> >
    
