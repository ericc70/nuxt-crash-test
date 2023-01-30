<template>
  <header>
    <nav>
      <NuxtLink to="/">Nuxt crash</NuxtLink>
    </nav>
  </header>
  <main>
    <slot />
  </main>
  <footer>
    <ul>
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/about">About</NuxtLink></li>
      <li><NuxtLink to="/products">Merch</NuxtLink></li>
    </ul>
  </footer>
</template>
<script setup >

</script>


<style scoped>
    .router-link-exact-active {
    color: crimson;
    }
</style>
