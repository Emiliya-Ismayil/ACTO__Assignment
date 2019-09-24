<template>
  <div id="app">
  <div id="leaderboard">
    <Leaderboard/>
  </div>
    <Inputs/>
  </div>
</template>

<script>
import Inputs from './components/Inputs.vue'
import Leaderboard from './components/Leaderboard.vue'




export default {
  name: 'app',
  components: {
    Inputs,
    Leaderboard,
 
  }
  
}


</script>

<style>

	[v-cloak] { display: none; }
	body {
    background-image: url("./assets/blackjack-620x350.jpg");
	background-repeat: no-repeat, repeat;
  background-size: cover; 
   background-position: center;
      height: 70%;
      background-attachment: fixed;
	}


</style>
