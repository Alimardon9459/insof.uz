<template>
  <q-layout view="hhh lpR lff">
    <q-header reveal class="bg-color text-white">
      <q-bar>
        <q-space />
        <div>+99895-024-70-72</div>
      </q-bar>
      <q-separator></q-separator>

      <div class="wrapper row no-wrap justify-between items-center ">

        <div class="gold--text ">
          <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

          <q-avatar class=" q-ma-sm" size="40px">
            <img src="../assets/logo3.png" width="100"/>
          </q-avatar>
          Insof.uz
        </div>
        <!-- <input type="text" class="search-input" placeholder="Qidirish"> -->

        <q-btn  to="/basket" >Karzinka</q-btn>
      </div>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer> -->
  </q-layout>
</template>
<script setup>
import { ref } from "vue";
import { useCounterStore } from "../stores/index";
const store = useCounterStore();
  //for draver
  function toggleLeftDrawer() {
    leftDrawerOpen.value = !leftDrawerOpen.value;
  }
  const leftDrawerOpen = ref(false);

  // api ni olish  piniadan kelayotgan funksiya orqali
  store.getProductsApi()

</script>
<style scoped>
.bg-color {
  background: linear-gradient(89.97deg, #33042e 52.52%, #8f1182 110.06%);
}
.gold--text {
  color: rgb(248, 204, 61);
  font-size: 18px;
}
.q-page-container {
  width: 95%;
  margin: 0 auto;
}
.wrapper{
  width: 97%;
  margin: 0 auto;
}
.search-input{
  width: 300px;
  height: 30px;
  border-radius: 10px;
  border: none;

}
::placeholder{
  padding-left: 10px;
  font-style: 19px;
}
.search-input:focus {
  outline:none;
}
/* .q-layout{
  background: linear-gradient(89.97deg, rgba(254, 6, 229, 0.45) 14.19%, rgba(51, 4, 46, 0.61) 110.06%);
} */
</style>