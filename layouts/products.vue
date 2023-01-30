<template>
   <header class="shadow-sm bg-white">
    <nav class="container mx-auto p-4  flexjustify-between">
       <NuxtLink to="/" class="font-bold">Nuxt crash</NuxtLink>
    </nav>
  </header>

  <main class="container mx-auto p-4">
    <slot />
  </main>

  <footer class="container mx-auto p-4">
    <ul class="flex gap-4">
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/about">About</NuxtLink></li>
      <li><NuxtLink to="/products">Merch</NuxtLink></li>
    </ul>
  </footer>
</template>


<style scoped>
    .router-link-exact-active {
    color: crimson;
    }
</style>
