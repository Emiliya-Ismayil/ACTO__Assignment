<template>
  <div id="app">
  <div id="leaderboard">
    <Leaderboard/>
  </div>
    <Inputs/>
    <PlayBtn/>
    

  </div>
</template>

<script>
import Inputs from './components/Inputs.vue'
import PlayBtn from './components/PlayBtn.vue'
import Leaderboard from './components/Leaderboard.vue'



export default {
  name: 'app',
  components: {
    Inputs,
    PlayBtn,
    Leaderboard
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
	
	#app {
		display: flex;
		align-content: stretch;
		align-items: stretch;
		height: 100vh;
		padding: 20px;
		box-sizing: border-box;
	}
	.v--modal-overlay {
		background: rgba(0,0,0,.7);
	}

</style>
