<template>
  <div class="category">
    <div class="card">
      <a href="#" class="card__link">
        <div class="card__main">
          <q-img
            src="https://olcha.uz/image/380x132/discount/KK/Ko/dP/1663671523.png"
            class="img"
          >
            <div class="absolute-full text-subtitle2 flex flex-center">
              Title
            </div>
          </q-img>
        </div>
      </a>
    </div>
    <div class="card">
      <a href="#" class="card__link">
        <div class="card__main">
          <q-img
            src="https://olcha.uz/image/380x132/discount/KK/Ko/dP/1663671523.png"
            class="img"
          >
            <div class="absolute-full text-subtitle2 flex flex-center">
              Title
            </div>
          </q-img>
        </div>
      </a>
    </div>
    <div class="card">
      <a href="#" class="card__link">
        <div class="card__main">
          <q-img
            src="https://olcha.uz/image/380x132/discount/KK/Ko/dP/1663671523.png"
            class="img"
          >
            <div class="absolute-full text-subtitle2 flex flex-center">
              Title
            </div>
          </q-img>
        </div>
      </a>
    </div>
  </div>
</template>
<script >
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>
<style lang="sass" scoped>
.category
    display: flex
    justify-content: space-between
    justify-items: center
    flex-wrap: wrap
    align-items: flex-start
.card
    width: 350px
    margin: 10px
    flex-grow: 1

.q-img
    border-radius: 10px

.q-img__content >
    background: rgba(0,0,0, 0.30)
</style>

