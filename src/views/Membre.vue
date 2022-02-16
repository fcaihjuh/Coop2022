<template>
  <div>
    <Navigation />
    <section class="section">
      <template v-if="member">
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img :src="avatar" />
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">{{ member.
                  fullname }}
                </p>
                <p class="subtitle is-6">{{ member.
                  email }}</p>
              </div>
            </div>

            <div class="content">
              <p>Membre depuis le {{ created_at }}</p>
            </div>
          </div>
        </div>

        <div class="box at-5">{{messages.length}} dernier(s) message(s) posté(s)</div>
        <template v-for="message in messages">
          <message :message="message" :key="message.id" />
        </template>
      </template>
    </section>
  </div>
</template>

<script>
import Message from "../components/Message.vue"
export default {
  components: {
    Message,
  },
  data() {
    return {
      member: false,
      allMessages: [],
    };
  },
  mounted() {
    this.member = this.$store.getters.getMembre(this.$route.
    params.idMembre);
    this.$api.get("channels").then((response) => {
      response.data.forEach((conversation) => {
        this.$api.get(`channels/${conversation.id}/posts`).
        then((response) => {
          response.data.forEach((message) => {
            if (message.member_id == this.member.id) {
              this.allMessages.push(message);
            }
          });
        });
      });
    });
  },
  computed: {
    messages() {
      return this.allMessages.sort((ma, mb) =>
        new Date(ma.created_at)<new Date(mb.created_at)).slice(0,10);
    },
    created_at() {
      if (this.member) {
        let d = new Date(this.member.created_at);
        return (
          d.toLocaleDateString("fr-FR") +  " à "+ d.
          toLocaleDateString("fr-FR")
        );
      }
    },
  }
};
</script>

<style>
</style>