<template>
  <div>
    <router-view v-if="$store.state.ready" />
    <template v-else>
      <div class="chargement has-text-light">
        <p>Chargement, veuillez patienter</p>
        <button class="button is-loading is-dark"></button>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    this.$store.commit("setReady", false);

    this.demarrer();
    console.log(this.$store.state.token);

    if(!this.$store.state.token) {
    this.seConnecter();
    } else {
      this.$api
      .get(`members/${this.$store.state.member.id}/signedin`)
      .then(this.demarrer)
      .catch(this.seConnecter);
    }
  },
  methods: {
    ready() {
      this.$store.commit("setReady", true);
    },
    demarrer() {
      this.$api.get("members").then((response) => {
        this.$store.commit("setMembers", response.data);
        this.ready();
      });
    },
    seConnecter() {
      this.$store.commit("setToken", false);
      this.$router.push("/connexion");
      this.ready();
    },
  },
};
</script>
<style>/*
<style lang="scss">
*/
/*@import "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css";*/

html {
  height: 100%;
}

html,
body {
  min-height: 100%;
}

.chargement {
  position: fixed;
  left:50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

}
</style>
