<template>
<!--<div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io"></a>
    </div>

    <div class="navbar-start">
      <router-link class="navbar-item" to="creer-conversation">Créer une conversation</router-link>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
            <router-link class="button is-warning" to="connexion">Se déconnecter</router-link>
        </div>
      </div>
      <div class="navbar-item">
      <div>Connecté(e) en tant que
          <b>{{$store.state.member.fullname}}</b>
          </div>

      </div>
      </div>
      <p>...</p>
      </nav>
            <poster-message :conversation="conversation"/>
</div>-->
<div>
  <Header />
  <section class="section">
    <template v-for="conversation in conversations">
      <Conversation :key="conversation.id" :conversation="conversation" />
    </template>
  </section>
  </div>
</template>

<script>
import Connexion from './Connexion.vue';
import Conversation from "../components/Conversation.vue";
import PosterMessage from '../components/PosterMessage.vue';
//import Header from "../components/Header.vue";

export default {
  components : {
    //Header,
    Conversation,
    PosterMessage,
    Connexion
  },
  data() {
    return {
      conversations : []
    };
  },
  mounted() {
    this.$api
    .get("channels")
    .then((response) => {
      this.conversations = response.data;
    });
  },
};
</script>;

<style>

</style>