<template>
  <div class="Inputs">
    <b-card bg-variant="light">
        <header>
    <img :src="image" />
  </header>
   
      <b-form-group
      id="fieldset-1"
      label-cols-sm="4"
      label-cols-lg="3"
      label="Player:"
      label-align-sm="right"
      label-for="input-1"
    >
      <b-form-input id="input-1" v-model="name" placeholder="Enter your name"></b-form-input>
    </b-form-group>
 
    <b-form-group
      id="fieldset-2"
      label-cols-sm="4"
      label-cols-lg="3"
      description="Let us know your name."
      label="Choose from this cards :"
      label-align-sm="right"
      label-for="input-2"
      :invalid-feedback="invalidFeedback"
      :valid-feedback="validFeedback"
      :state="state"
    >
      <b-form-input id="input-2" v-model="text" :state="state" trim></b-form-input>
    </b-form-group>
    <div>Cards :2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A</div>
    <div class="mt-2">Player : {{ name }}</div>
    </b-card>
  </div>
</template>


  <script>

  export default {
    computed: {
      state() {
        return this.text.length >= 4 ? true : false
      },
      invalidFeedback() {
        if (this.text.length > 4) {
          return ''
        } else if (this.text.length > 0) {
          return 'Enter at least 4 characters'
        } else {
          return 'Please enter the valid cards'
        }
      },
      validFeedback() {
        return this.state === true ? 'Thank you' : ''
      }
    },
    data() {
      return {
        text: '',
         image: require("@/assets/logo.png")
      }
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

img {
  width: 200px;
}
@media (max-width: 700px) {
  img {
    display: block;
    
  }
}
</style>
