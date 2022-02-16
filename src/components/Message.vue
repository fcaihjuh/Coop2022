<template>
  <div>
      <transition name="fade">
          <article class="media box" v-if="member && afficher">
              <figure class="media-left">
                  <p class="image is-64x64">
                      <img :src="avatar(member)" />
                  </p>
              </figure>
              <div class="media-content">
                  <div class="content">
                      <p>
                          <router-link :to="{name:'Membre', params:{idMembre:member.id}}" :key="member.id" class="">
                              <strong>{{member.fullname}}</strong>
                          </router-link> /
                          <small>{{member.email}}</small>  /
                          <small>{{dateMessage}}</small>
                          <br />
                          <span v-html="message.message"></span>
                      </p>
                  </div>
                  <nav class="level is-mobile">
                      <div class="level-left"></div>
                          <div class="level-right">
                              <a @click="supprimer" class="level-item" v-if="message.member_id == $store.state.member.id"
                              >
                              <span class="icon is-small">
                                  <i class="fas fa-trash"></i>
                              </span>
                              </a>
                      </div>
                      
                  </nav>
              </div>
          </article>
      </transition>
  </div>
</template>

<script>
export default {
  props: ["message"],
  computed: {
      member(){
          return this.$store.getters.getMembre(this.message.member_id)
      },
      dateMessage(){
        let d = new Date(this.member.created_at);
        return ( 'le ' + d.toLocaleDateString("fr-FR") + ' à ' + d.toLocaleTimeString("fr-FR"));
      }
  },
  data() {
      return {
          afficher: true,
      };
  },
  methods: {
      supprimer() {
          if (confirm("Supprimer ce message ?")) {
              this.$api
              .delete(
                  `channels/${this.message.channel_id}/posts/$
                  {this.message.id}`
              )
              .then((response) => {
                  console.log(response);
                  this.afficher = false;
              })
              .catch((error) => {
                  if (error.response.data.message) {
                      alert(error.response.date.message);
                  }
              });
          }
      }
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>