<template>
 
   <div class="container">
	<div class="row"  >
	
  <b-alert id="board" show variant="" :items="items">
    <h4 class="alert-heading" style="color: #FFF;">Leaderboard</h4> <hr>
   <div class="col-lg-12" id="players" >Score : {{ this.$store.state.game.playerScore }} Gamer : {{this.$store.state.game.playerName}} Cards : {{this.$store.getters.playerHand}}</div>
    <hr>
	<div class="col-lg-12" id="players">Score : {{ this.$store.state.game.computerScore }} Gamer : {{'Generator'}} Cards : {{this.$store.getters.computerHand}}</div>
   
  </b-alert>
		</div>
</div>
  
  </template>

  


<script>
  export default {
	 
    data() {
      return {
        items: [
          { score : this.$store.state.game.playerScore, Gamer: this.$store.state.game.playerName, hand_cards: this.$store.getters.playerHand },
          { score: this.$store.state.game.computerScore, Gamer: 'Generator', hand_cards: this.$store.getters.computerHand },
        ]
      };
	},
	
  }
</script>

<style scoped>
	#board  {
	border-radius: 5px;
	bottom: 0;
	padding: 20px;
	position: absolute;
	left: 0;
	width: 460px;
    height: 200px;
	  margin:15px;
	border: 2px solid rgb(172, 255, 38);
	background: rgb(66, 65, 65);
	content: '';
	opacity: 0.6;

		
}

	#players {
		color: #FFF;
	
		margin: 20px 0;
		position: relative;
		text-shadow: 1px 1px #000;
		
		
	}

</style>