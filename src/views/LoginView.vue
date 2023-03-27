<template>
  <div>
    <h1>Connexion</h1>
    <form>
      <div>
        <input type="email" id="email" placeholder="Adresse e-mail" v-model="state.email" />
      </div>
      <div>
        <input type="password" id="password" placeholder="Mot de passe" v-model="state.password" />
      </div>
      <button @click.prevent="login">Se connecter</button>
    </form>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()

    const state = reactive({
      email: '',
      password: '',
      error: null,
    })

    const login = async () => {
      try {
        if (state.email === 'user@example.com' && state.password === 'password') {
          router.push('/classement')
        } else {
          state.error = 'Adresse email ou mot de passe incorrect'
        }
      } catch (err) {
        console.error(err)
        state.error = 'Une erreur est survenue lors de la connexion'
      }
    }

    return {
      state,
      login,
    }
  },
}
</script>
