<template>
    <div>
        
    </div>
</template>
<script setup>
import axios from 'axios'
import { ref } from 'vue';
const api_address = ref('')
async function getApiUser() {
  try {
    const fetch_users = await axios.get("http://api.ipify.org/")
    api_address.value=fetch_users.data
    console.log(api_address.value);

  } catch (err) {
    console.log(err)
  }
}
getApiUser()
</script>
<style >
    
</style>