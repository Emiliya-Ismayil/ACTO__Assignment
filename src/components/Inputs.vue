<template>
  <div class="Inputs" >
    <b-card bg-variant="light" >
        <header>
          <b-media>
        <template v-slot:aside>
          <b-img :src="image"  width="150" alt="placeholder"></b-img>
        </template>
             <div class="">
        <h5>Game's Cards : </h5>
        <p>
       <strong> 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A </strong>
        </p>
             </div>
      </b-media>
   </header>
      <b-form-group
      id="fieldset-1"
      label-cols-sm="4"
      label-cols-lg="3"
      label="Player:"
      label-align-sm="right" class="mt-0"
      label-for="input-1"
    >
      <b-form-input 
      id="input-1"
       v-model="name"
       v-mask="['AAAAAAAAAAAAA']"
        placeholder="Enter your name">
        </b-form-input>
    </b-form-group>
 
    <b-form-group
      id="fieldset-2"
      label-cols-sm="4"
      label-cols-lg="3"
      label="Type cards: "
      label-align-sm="right"
      label-for="input-2"
      description ="Choose from cards above"
      :invalid-feedback="invalidFeedback"
      :valid-feedback="validFeedback"
      :state="state"
   
   
    >
      <b-form-input id="input-2" 
       v-mask="['X X X X X X']" 
       v-model="text" 
      :state="state" trim
     ></b-form-input>
    </b-form-group>
    
    <div class="mt-0">Player : {{ name }}</div>
<div class="mt-0">
    <b-button-group>
      <b-button variant="primary">Play</b-button>
      <b-button variant="danger">Reset</b-button>
    </b-button-group>

  </div>
    </b-card>
  </div>
</template>


  <script>
  

  export default {
    computed: {
      state() {
        return this.text.length >= 7 ? true : false
       
      },
      invalidFeedback() {
        if (this.text.length > 7) {
          return ''
        } else if (this.text.length > 0) {
          return 'Enter at least 4 characters'
        } 
        
      },
      validFeedback() {
        
        return ''
      }
    
    },
  
    data() {
      return {
        text: '',
         image: require("@/assets/logo.png"),
        
      }
    }
  }

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button{

  margin-left: 300px;  
}
h5{
  margin-top: 30px;
}

input {
    text-transform: uppercase;
}
</style>
 