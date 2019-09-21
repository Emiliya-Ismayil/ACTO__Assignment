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

[v-cloak] { display: none; }
	body {
		background: linear-gradient(141deg, #30db86, #718a2c, #0d96bf);
		background-size: 600% 600%;
		margin: 0;
		font-family: Arial;
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
