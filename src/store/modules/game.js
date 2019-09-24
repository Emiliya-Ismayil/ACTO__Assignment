import { createCard, generateCard, Card } from '../states/card';

const state = {
    playerName: "",
    playerScore: 0,
    computerScore: 0,
    playerHand: [], // Card[]
    computerHand: [] // Card[]
}

const getters = {
    playerHand: (state) => state.playerHand.map(card => card.label).join(" "),
    computerHand: (state) => state.computerHand.map(card => card.label).join(" "),
    winnerText: (state) => {
        if(state.playerScore > state.computerScore){
            return ' you win!';
        }
        else if (state.playerScore < state.computerScore) {
            return "you lose..";
        }
        else   {
            return "It's a draw!";
        }
    }
}

//   // actions
const actions = {
    generateCards({ commit, state }) {
        commit("generateComputerHand", { count: state.playerHand.length });
    },
    play({ commit, dispatch, state }) {
        dispatch("generateCards");
        const { playerHand, computerHand } = state;
        let currentComputerScore = 0;
        let currentPlayerScore = 0;
        for (let i = 0; i < playerHand.length; i++) {
            if (playerHand[i].value > computerHand[i].value) {
                currentPlayerScore++;
            }
            else if (playerHand[i].value < computerHand[i].value) {
                currentComputerScore++;
            }
        }
        commit("updateScores", { playerScore: currentPlayerScore, computerScore: currentComputerScore });
    },
    newRound({ commit }) {
        commit("clearHands");
    },
    restartGame({ commit }) {
        commit("clearHands");
        commit("resetScores");
    },
    setPlayerName({ commit }, { playerName }) {
        commit("setPlayerName", { playerName });
    },
    // hand: string (A K Q 10)
    setPlayerHand({ commit }, { hand }) {
        commit("setPlayerHand", { hand: hand.split(" ") });
    }
}

const mutations = {
    // hand: string[]
    // return: Card[]
    setPlayerHand(state, { hand }) {
        state.playerHand = hand.map(card => createCard(card));
    },
    generateComputerHand(state, { count }) {
        state.computerHand = Array.from({length: count}, (x, i) => generateCard());
    },
    clearHands(state) {
        const initialState = { ...Card };
        state.playerHand = initialState.playerHand;
        state.computerHand = initialState.computerHand;
    },
    updateScores(state, { playerScore, computerScore }) {
        state.playerScore += playerScore;
        state.computerScore += computerScore;
        
    },
    resetScores(state) {
        const initialState = { ...Card };
        state.playerScore = initialState.playerScore;
        state.computerScore = initialState.computerScore;
    },
    setPlayerName(state, { playerName }) {
        state.playerName = playerName;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}