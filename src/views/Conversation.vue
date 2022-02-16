<!--<template>
  <div>
    <Navigation />
    <section class="section">
        <div class="box" v-if="conversation">
        <p class="title is-4">{{ conversation.topic }}
          <span class="tag">{{messages.length}} message(s)</span></p>
        <p class="subtitle is-6">{{ conversation.label }}</p>
      </div>
      <poster-message :conversation="conversation" />

      <template v-for="message in messages">-->
        <!--<div class="card mb-2">-->
         <!-- <div class="card-content">-->
            <!--<div class="content">-->
              <!--{{message.message}}-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
     <!-- </template>
    </section>
  </div>
</template>-->

<template>
    <div> 
        <Navigation />
        <section class="section">
            <div class="box" v-if="conversation">
                <p class="title is-4">{{conversation.topic}}<span class="tag"></span></p>
                <span class="tag">{{messages.length}} message(s)</span>
                <p class="subtitle is-6">{{conversation.label}}</p>
                </div>
                <poster-message :conversation="conversation"/>
                <h5 class="title is-5 has-text-warning">Les messages</h5>
                <template v-for="message in messages">
                    <message :message="message" :key="message.id"/>
                </template>
                    </section>                         
    </div> 
</template>

<script>
import PosterMessage from "../components/PosterMessage.vue";
import Message from "../components/Message.vue";

export default {
  components: {
    PosterMessage,
    Message
  },
  data() {
    return {
      conversation: false,
      messages: [],
      members: this.$store.state.members
    };
  },
  mounted() {
    this.chargerConversation();
    //this.$bus.$on('charger-conversation', this.chargerConversation)
    this.$bus.$on('charger-messages', (data) => {
    this.chargerMessages
    });
  },
  methods: {
      chargerConversation(){
    //let id = this.$route.params.idConversation;
      this.$api.get(`channels/${this.$route.params.id}`).then((response) => {
      this.conversation = response.data;
      this.chargerMessages();
    });
},
    chargerMessages(){
      this.$api.get(`channels/${this.conversation.id}/posts`).then((response) => {
      this.messages = response.data;
     });
    }
  }
};
</script>

<style>
</style>