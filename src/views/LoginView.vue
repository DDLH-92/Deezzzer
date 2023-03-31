<script>
import { reactive } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const state = reactive({
      email: "",
      password: "",
      error: null,
    });

    const login = async () => {
      try {
        if (
          state.email === "tdelapierre@mediaonegroup.ch" &&
          state.password === "M07 D3 P4553"
        ) {
          localStorage.setItem("isAuthenticated", "true");
          router.push("/home");
        } else {
          state.error = "Adresse email ou mot de passe incorrect";
        }
      } catch (err) {
        console.error(err);
        state.error = "Une erreur est survenue lors de la connexion";
      }
    };

    return {
      state,
      login,
    };
  },
};
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <div>
      <img src="public/images/Logo-dizzzer.png" alt="Logo Dizzzer" class="h-40 mb-4" />
    </div>
    <form class="flex flex-col items-center">
      <div class="mb-4">
        <input type="email" id="email" placeholder="Adresse e-mail" v-model="state.email"
          class="border border-gray-400 p-2 rounded-lg w-80 placeholder-black background-white" />
      </div>
      <div class="mb-6">
        <input type="password" id="password" placeholder="Mot de passe" v-model="state.password"
          class="border border-gray-400 p-2 rounded-lg w-80 placeholder-black background-white" />
      </div>
      <button @click.prevent="login"
        class="border border-green-500 text-green-500 font-semibold py-2 px-4 rounded-lg w-full transition-colors duration-300 hover:bg-green-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
        Se connecter
      </button>
    </form>
    <div v-if="state.error" class="error mt-4">{{ state.error }}</div>
  </div>
</template>
