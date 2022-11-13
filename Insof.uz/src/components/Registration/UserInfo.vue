<template >
    <div class="mb-30px">
        <div class="register">
            <p class="register__title">Персональные данные</p>
            <q-input outlined v-model="fname" label="Ismingiz" counter  maxlength='30' class=" mt-10px" />
            <q-input outlined v-model="tel_number" label="Raqamingiz" counter  maxlength='11' class=" mt-10px" />
            <q-input outlined v-model="adress" label="Manzilingiz" counter  maxlength='100' class=" mt-10px" />
            <q-input outlined v-model="comment" label="Izohingiz" type="textarea" counter  maxlength='150' class=" mt-10px" />
        </div>
        <div class="register__end row justify-around ">
            <q-btn class="text-white bg-blue-grey-10 mt-30px" icon="location_on" label=" Lakatsiya olish  " />
            <q-btn to="/orderinfo" class="text-white bg-blue-grey-10 mt-30px" icon="send" label=" Buyurtma berish  " />
        </div>
    </div>
</template>
<script>
import {ref} from 'vue';
export default {
    setup() {
        const fname=ref('')
        const tel_number=ref('+998')
        const adress=ref('')
        const comment=ref('')
        return{
            fname,
            tel_number,
            adress,
            comment,
        }
    }
}
</script>
<style scoped>
    .register__title{
        font-size: 32px;
    }
</style>