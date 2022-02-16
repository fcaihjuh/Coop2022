<template>
  <form class="box" @submit.prevent="poster">
    <div class="field">
      <div class="control">
        <input type="text" class="input" v-model="message">
      </div>
    </div>
    <div class="buttons">
      <button class="button">Poster un message</button>
    </div>
  </form>
</template>

<script>
export default {
  props: ['conversation'],
  data() {
    return {
      message: '',
    };
  },
  methods: {
    poster() {
      this.$api.post(`channels/${this.conversation.id}/posts`, { //conversation avec ou sans s à vérifier
          message: this.message,
          channel_id: this.conversation.id,
          member_id: this.$store.state.member.id,
        })
        .then((response) => {
          this.$bus.$emit('charger-message', response.data)
          this.message = "";
          /*console.log(response.data)
          message++;*/
        });
        }  
    },
};
</script>

<style>
</style>