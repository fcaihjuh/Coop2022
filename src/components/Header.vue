<template>
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
            <router-link class="button is-warning" to="deconnexion">Se déconnecter</router-link>
        </div>
      </div>
      <div class="navbar-item">
      <div>Connecté(e) en tant que
          <b>{{$store.state.member.fullname}}</b>
          </div>
      </div>
      </div>
      </nav>

</template>

<script>
export default {

};
</script>

<style>
</style>