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
		background: linear-gradient(141deg, #0d96bf, #649e2d, #0d96bf);
		background-size: 600% 600%;
		margin: 0;
		animation: BackgroundChanging 20s ease infinite;
	}
	@keyframes BackgroundChanging { 
		0%{background-position:50% 0%}
		50%{background-position:50% 100%}
		100%{background-position:50% 0%}
	}
	hr {
		border: 0;
		height: 1px;
		margin: 4px -4px;
		background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0));
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
