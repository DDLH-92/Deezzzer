<template>
  <header class="px-20 d-flex flex-row align-items-center">
    <img class="logo" src="../assets/LOGO_2-WithoutBack.png" alt="Logo">
    <div class="search">
      <input type="text" placeholder="Rechercher...">
    </div>
    <div class="user">
      <img class="user-image" src="../assets/AvatarTim.jpeg" alt="Avatar" @click="toggleDropdown">
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
  name: 'TheHeader',

  setup() {
    const router = useRouter()

    const state = reactive({
      userImage: '',
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
  .user-image {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.logo {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}
}
</style>
