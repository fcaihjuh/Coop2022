<template>
<section class="hero is-fullheight">
    <div class="hero-body">
        <div class="container">
            <div class="colums is-centered">
                <div class="column is-5">
    <form class="box" @submit.prevent="validation"><!-- form pour interagir avec le formulaire-->
    <div class="field">
      <label for class="label">Sujet</label>
      <div class="control">
        <input class="input" v-model="conversation.topic" />
      </div>
    </div>
      <div class="field">
        <label class="label">Tags</label>
        <div class="control">
        <input class="input"  v-model="conversation.label" />
        </div>
      </div>
      <div class="buttons">
      <button class="button">Créer cette conversation</button>
        <router-link class="button is-text" to="/">Annuler</router-link>
    </div>
    </form>
  </div>    
    </div>
    </div>    
    </div>
</section>
</template>

<script>
//import Header from '../components/Header.vue';
export default {
    components : {
        //Header
    },
    data() {
        return {
      conversation : {
          topic : "",
          label : "",
          },
      };
    },
  methods: {
    validation() {
      this.$api
        .post("channels", this.conversation)
        .then((response) => {
          this.$router.push({name:'Conversation', params:{id:response.data.id}})
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    },
  },
};
</script>

<style>
</style>