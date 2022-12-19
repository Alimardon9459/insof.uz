<template >
  <div class="mb-30px">
    <div class="register">
      <p class="register__title">Персональные данные</p>
      <q-input
        outlined
        v-model="fname"
        label="Ismingiz"
        counter
        maxlength="30"
        class="mt-10px"
      />
      <q-input
        outlined
        v-model="tel_number"
        label="Raqamingiz"
        counter
        maxlength="13"
        class="mt-10px"
      />
      <q-input
        outlined
        v-model="adress"
        label="Manzilingiz"
        counter
        maxlength="100"
        class="mt-10px"
      />
      <q-input
        outlined
        v-model="comment"
        label="Izohingiz"
        type="textarea"
        counter
        maxlength="150"
        class="mt-10px"
      />
    </div>
    <div class="register__end row justify-around">
      <q-btn
        class="text-white bg-blue-grey-10 mt-30px"
        icon="location_on"
        label=" Lakatsiya olish  "
        @click="getLocation()"
      />
      
      <q-btn
        class="text-white bg-blue-grey-10 mt-30px"
        icon="send"
        :disable="disable_btn_send"
        label=" Buyurtma berish "
        @click="send()"
        to="/orderinfo"
      />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue"
import axios from "axios"
import { useCounterStore } from "src/stores/index"
const store = useCounterStore()
const fname = ref("")
const tel_number = ref("+998")
const adress = ref("")
const comment = ref("")

// lakatsiyani olish uchun
const location = ref([])
const latitude = ref("")
const longitude = ref("")
const user_position = ref("")
const disable_btn_send = ref(true)

function getLocation() {
  try {
    navigator.geolocation.getCurrentPosition((position) => {
      location.value = position
      latitude.value = location.value.coords.latitude
      longitude.value = location.value.coords.longitude
      user_position.value = latitude.value + "," + longitude.value
      console.log(user_position.value)

      disable_btn_send.value = false
    })
  } catch (error) {
    alert(error)
    disable_btn_send.value = false
  }
}
// foydalanuvchi malumotlarini jo'natish
function sendUserInfo() {
  fetch("https://arzonuz.pythonanywhere.com/user/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userName: fname.value,
      phoneNumber: tel_number.value,
      address: adress.value,
      comment: comment.value,
      location: user_position.value,
    }),
  })
}
// foydalanuvchi malumotlarini qaytib olish
const users = ref([])
async function getApiUser() {
  try {
    const fetch_users = await axios.get("https://arzonuz.pythonanywhere.com/user/")
    users.value = fetch_users.data
    console.log(users.value)
    users.value.reverse()

  } catch (err) {
    console.log(err)
  }
}
getApiUser()
// foydalanuvchi idsini aniqlash
const user_id = ref()
function ChectUserId() {
  users.value.forEach(el => {
    if ( el.userName == fname.value && el.phoneNumber == tel_number.value && el.location == user_position.value ) {
      user_id.value = el.id
      console.log("sizning id raqamingiz maxmud tog'o':" + user_id.value)
    }
    console.log("salom");
  });     
}
// maxsulotlarni jo'natish
function sendOrders(){
  store.Orders.forEach(el => {
    if(el.kilogramm>0){
      fetch("https://arzonuz.pythonanywhere.com/orders/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          product_name: el.nomi,
          weight: el.quantity,
          price: el.narx,
          total_price: el.narx * el.quantity,
          orderForUser: user_id.value,
        }),
      })
      console.log("klagram");
    }
    else if(el.litri>0){
      fetch("https://arzonuz.pythonanywhere.com/orders/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          product_name: el.nomi,
          quantity: el.quantity,
          litr:el.litri,
          price: el.narx,
          total_price: el.narx * el.quantity,
          orderForUser: user_id.value,
        }),
      })
      console.log("ichimlik");
    }
    else{
      fetch("https://arzonuz.pythonanywhere.com/orders/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          product_name: el.nomi,
          quantity: el.quantity,
          price: el.narx,
          total_price: el.narx * el.quantity,
          orderForUser: user_id.value,
        }),
      })
      console.log("donaki");
    }
  });
}

async function send() {
  sendUserInfo()
  setTimeout(() => {
    getApiUser()
  }, 300);
  let chect_user_id = setInterval(() => {
    if (users.value.length>0) {
      ChectUserId()
      clearInterval(chect_user_id)
    }
  }, 310 );
  let set_order = setInterval(() => {
    if (user_id.value>0) {
      sendOrders()
      clearInterval(set_order)
    }
  }, 320);

}
</script>
<style scoped>
.register__title {
  font-size: 32px
}
</style>