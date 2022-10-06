<template>
  <q-layout view="hhh lpR lff">
    <q-header reveal class="bg-color text-white">
      <q-bar>
        <q-space/>
        <div>
          +99895-024-70-72
        </div>
      </q-bar>
      <q-separator></q-separator>
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="gold--text">
          <q-avatar>
            <img src="../assets/logo3.png" />
          </q-avatar>
          Insof.uz
        </q-toolbar-title>
        
        <a href="new">
          Mahsulotlar
        </a>
      </q-toolbar>
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

<script>
import { ref } from "vue";

export default {
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>
<style scoped>
.bg-color {
  background: linear-gradient(89.97deg, #33042e 52.52%, #8f1182 110.06%);
}
.gold--text {
  color: rgb(248, 204, 61);
}
.q-page-container{
  width: 95%;
  margin: 0 auto;
}
/* .q-layout{
  background: linear-gradient(89.97deg, rgba(254, 6, 229, 0.45) 14.19%, rgba(51, 4, 46, 0.61) 110.06%);
} */
</style>