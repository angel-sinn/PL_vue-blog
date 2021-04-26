<template>
  <div class="home">
    Home
    <p>My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">click me</button>
    <button @click="age++">add 1 to age</button>
    <input type="text" v-model="name">
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Home',
  // composition api - variables not reactive by default, but can use refs to make it reactive
  setup() {

    // const p = ref(null)
    
    const name = ref('mario')
    const age = ref(30)

    const handleClick = () => {
      // need to use .value to change it (only inside setup)
      name.value = 'luigi'
      age.value = 35
    }

    return {name, age, handleClick}
  },
}
</script>
