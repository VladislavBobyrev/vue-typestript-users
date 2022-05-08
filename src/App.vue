<template>
  <header class="navbar">
    <h3>{{title}}</h3>
    <ul class="navbar-menu">
      <li>
        <router-link to="/">Главная</router-link>
      </li>
      <li>
        <router-link to="/users">Пользователи</router-link>
      </li>
    </ul>
  </header>
  <main class="container with-nav">
    <router-view/>
  </main>
</template>

<script lang="ts">
export default {
  setup() {
    return{
      title: 'Vue + TypeScript'
    }
  }
}
</script>
