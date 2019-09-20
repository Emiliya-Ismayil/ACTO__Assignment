<template>
  <div id="app">

    <Inputs/>
    <PlayBtn/>

  </div>
</template>

<script>
import Inputs from './components/Inputs.vue'
import PlayBtn from './components/PlayBtn.vue'

export default {
  name: 'app',
  components: {
    Inputs,
    PlayBtn
  }
}


</script>

<style>


</style>
