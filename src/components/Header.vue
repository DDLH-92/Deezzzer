<template>
  <header class="px-20 d-flex flex-row align-items-center">
    <div class="logo">Mon logo</div>
    <div class="search">
      <input type="text" placeholder="Rechercher...">
    </div>
    <div class="user">
      <img src="avatar.png" alt="Avatar" @click="toggleDropdown">
      <div v-show="showDropdown" class="dropdown">
        <ul>
          <li><a href="#">Se déconnecter</a></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'Header',

  setup() {
    const router = useRouter()

    const state = reactive({
      userImage: './assets/AvatarTim.jpeg',
      showDropdown: false
    })

    const toggleDropdown = () => {
      state.showDropdown = !state.showDropdown
    }

    const logout = () => {
      localStorage.removeItem('isAuthenticated')
      router.push('/login')
    }

    return {
      userImage: state.userImage,
      showDropdown: state.showDropdown,
      toggleDropdown,
      logout
    }
  }
}
</script>

<style lang="scss" scoped>

header {
  background-color: var(--primary-1);
  a {
    color: var(--text-primary-color);
    img {
      width: 20px;
      margin-right: 5px;
    }
    .logo {
      font-weight: 700;
      font-size: 20px;
    }
  }
}
</style>
