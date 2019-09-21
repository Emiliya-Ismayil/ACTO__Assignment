<template>
 <div id="board">
      <b-table striped hover :items="items" id="players"></b-table>
     
    </div>
  </template>

  

  
<script>
  export default {
    data() {
      return {
        items: [
          { score : 3, Gamer: 'Player Name', hand_cards: '2 A K 6 9' },
          { score: 2, Gamer: 'Generator', hand_cards: 'J 5 3 8 Q' },
        ]
      }
    }
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
	background: #333;
	content: '';
	opacity: 0.6;
}

	#players {
		color: #FFF;
		font: 700 18px/20px;
		margin: 12px 0;
		position: relative;
		text-shadow: 1px 1px #000;
		
	}

</style>