<template>
  <div class="container">
    <div class="row">
      <b-card id="Inputs" bg-variant="light">
        <header>
          <b-media>
            <template v-slot:aside>
              <b-img :src="image" width="150" alt="placeholder"></b-img>
            </template>
            <div>
              <h5>Game's Cards :</h5>
              <p>
                <strong>2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A</strong>
              </p>
            </div>
          </b-media>
        </header>
        <b-form-group
          id="fieldset-1"
          label="Player:"
          label-align-sm="left"
          class="mt-0"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-mask="['AAAAAAAAAAAAA']"
            v-on:change="playerNameChanged"
            placeholder="Enter your name"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="fieldset-2"
          label="Type cards: "
          label-align-sm="left"
          label-for="input-2"
          description="Choose from cards above"
          :invalid-feedback="invalidFeedback"
          :valid-feedback="validFeedback"
          :state="state"
        >
          <b-form-input
            id="input-2"
            v-mask="['X X X X X X']"
            v-model="text"
            :formatter="formatCards"
            :state="state"
            trim
          ></b-form-input>
        </b-form-group>

        <div class="mt-0">Player : {{ this.$store.state.game.playerName }}</div>
        <div class="mt-0">
          <b-button-group>
            <b-button variant="primary" v-on:click="playClick">Play</b-button>
            <b-button variant="danger" v-on:click="refreshClick">Refresh</b-button>
          </b-button-group>
        </div>
      </b-card>
    </div>
  </div>
</template>


  <script>
import { CARD_TYPES } from "../store/states/card";
export default {
  computed: {
    state() {
      return this.text.length >= 7 ? true : false;
    },
    invalidFeedback() {
      if (this.text.length > 7) {
        return "";
      } else if (this.text.length <= 4) {
        return "Enter at least 4 characters";
      } else return "";
    },
    validFeedback() {
      if (this.text) {
        this.$store.dispatch("setPlayerHand", { hand: this.text });
      }
      return "Click on Play button";
    }
  },

  data() {
    return {
      text: "",
      image: require("@/assets/logo.png")
    };
  },
  methods: {
    playClick: function() {
      this.$store.dispatch("play");
    },
    refreshClick() {
      window.location.reload();
    },
    playerNameChanged: function(text) {
      console.info(text);
      this.$store.dispatch("setPlayerName", { playerName: text });
    },
    formatCards: function(value, event) {
      let lastInput = value[value.length - 1];
      let oldInput = value.substring(0, value.length - 1);
      if (event.type === "input") {
        if (
          lastInput &&
          Object.values(CARD_TYPES).find(
            type => type === lastInput.toUpperCase()
          )
        ) {
          return oldInput + lastInput.toUpperCase();
        } else {
          return oldInput;
        }
      } else {
        return value;
      }
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  margin-left: 300px;
}
h5 {
  margin-top: 30px;
}

input {
  text-transform: uppercase;
}
#Inputs {
  margin: 15px;
  position: absolute;
  left: 0;
}
</style>