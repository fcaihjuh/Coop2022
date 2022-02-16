<template>
<section class="hero Is-warning is-fullheight">
    <div class="hero-body">
        <div class="container">
            <div class="colums is-centered">
                <div class="column is-5-tablet is-4-desktop is-3-widescreen">
                    <div class="box">
    <h1 class="title">Coop</h1>
     <h2 class="subtitle">Création de compte</h2>
                    </div>
    <form class="box" @submit.prevent="validation"><!-- form pour interagir avec le formulaire-->
    <div class="field">
      <label for class="label">Nom</label>
      <div class="control has-icons-left">
        <input type="text" v-model="fullname" class="input" required />
        <span class="icon is-small is-left">
          <i class="fa fa-user"></i>
          </span>
      </div>
    </div>
      <div class="field">
        <label for class="label">Email</label>
        <div class="control has-icons-left">
        <input type="email" v-model="email" class="input" required />
        <span class="icon is-small is-left">
          <i class="fa fa-envelope"></i>
          </span>
      </div>
      </div>
      <div class="field">
        <label for class="label">Password</label>
        <div class="control has-icons-left">
        <input type="password" v-model="password" class="input" required />
        <span class="icon is-small is-left">
          <i class="fa fa-envelope"></i>
          </span>
      </div>
      </div>
      <div class="buttons">
      <button class="button">Valider</button>
        <router-link class="button is-text" to="connexion">Se connecter</router-link>
    </div>
    </form>
  </div>    
    </div>
    </div>    
    </div>
</section>
</template>

<script>
export default {
    data() {
        return {
            fullname : 'Florence CAI',
            email : 'florence0cai@gmail.com', 
            password : 'test'
        }
    },
    methods : {
        validation() {
            let donnees = {
            //pour appeler l'api ($api), requete en post
                fullname: this.fullname,
                email: this.email,
                password: this.password
            }
             this.$api
             .post('members', donnees)
             .then((response)=> {
                 alert('Votre compte a été créé, vous pouvez vous connecter.');
                 this.$router.push("/connexion");
             }).catch(error=>{
            alert(error.response.data.message);
        })
    },
},
}
</script>

<style>

</style>