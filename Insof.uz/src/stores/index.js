import { store } from 'quasar/wrappers'
import { createPinia } from 'pinia'
import { defineStore } from 'pinia'
import axios from "axios"
export const useCounterStore = defineStore('counter', {
  state: () => ({
    ProductsApi:[],
    DiscountProducts:[],
    BuyerProducts:[], 
  }),

  // productlarni becentdan qabul qilyabdi
  actions:{ 
     async getProductsApi  () {
      try {
        const Fetch_Product = await axios.get('https://insofuz.herokuapp.com/productlar/');
        this.ProductsApi = Fetch_Product.data;
      } 
      catch (err) {
        console.log(err);      
      }
    },
    
    // productlar ichida chegirma foizi 0 dan katta bo'lgan productlarni fitler qiladi
    getDiscountProducts () {
      for(let i=0 ; i<this.ProductsApi.length ; i++){
        if(this.ProductsApi[i].chegirma_foizi>0){
         this.DiscountProducts.push(this.ProductsApi[i]) 
        }
      }
    },
    // productlar ichida xaridorgir bo'lgan productlarni fitler qiladi
    async getBuyerProducts () {
      for(let i=0 ; i<this.ProductsApi.length ; i++){
        if(this.ProductsApi[i].xaridorgir==true){
          this.BuyerProducts .push(this.ProductsApi[i]) 
        }
      }
    }

  },
  


})

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store((/* { ssrContext } */) => {
  const pinia = createPinia()

  // You can add Pinia plugins here
  // pinia.use(SomePiniaPlugin)

  return pinia
})
