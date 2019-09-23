<template>
 
   
	<div>
  <b-alert id="board" show variant="" :items="items">
    <h4 class="alert-heading" style="color: #FFF;">Leaderboard</h4>
   <div class="mt-0" id="players" >Score : {{ this.$store.state.game.playerScore }} Gamer : {{this.$store.state.game.playerName}} Cards : {{this.$store.getters.playerHand}}</div>
    <hr>
	<div class="mt-0" id="players">Score : {{ this.$store.state.game.computerScore }} Gamer : {{'Generator'}} Cards : {{this.$store.getters.computerHand}}</div>
   
  </b-alert>
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
	#board , #board:before {
	border-radius: 5px;
	bottom: 0;
	padding: 20px;
	position: absolute;
	left: 0;
	width: 460px;
    height: 200px;
		
}

#board {
      margin:20px;
	border: 2px solid rgb(172, 255, 38);
	
}

#board:before {
	background: rgb(66, 65, 65);
	content: '';
	opacity: 0.6;
}

	#players {
		color: #FFF;
		font: 800 18px/20px;
		margin: 29px 0;
		position: relative;
		text-shadow: 1px 1px #000;
		
		
	}

</style>