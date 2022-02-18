<template>

<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <router-link class="navbar-item" to="/">Coop</router-link>
  </div>

 
    <div class="navbar-start">
      <router-link class="navbar-item" to="/">Conversations</router-link>
      <router-link class="navbar-item" to="creer-conversation">Creer une conversation</router-link>
      <router-link class="navbar-item" to="/membres">Tous les Membres</router-link>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div>
          Connecté en tant que <b>{{$store.state.member.fullname}}</b>
        </div> 
      </div>
      <div class="navbar-item">
        <div class="buttons">
          <router-link class="button is-warning" to="/deconnexion">se déconnecter</router-link>
        </div>
      </div>
     

    </div>
  
</nav>

</template>

<script>
export default{
    data(){
        return{
            conversations:[]
        }
    },
    mounted(){
        this.$api.get('channels').then(response=>{
            this.conversations = response.data
        })
    }
}
</script>
