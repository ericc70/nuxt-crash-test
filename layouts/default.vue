<template>
  <header>
      <nav>
        <NuxtLink to="/">Nuxt crash</NuxtLink>
        <ul >
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products">Merch</NuxtLink></li>
        </ul>
      
      </nav>
    </header>
    <main>
        <slot />
    </main>
</template>

<style scoped>
    .router-link-exact-active {
        color:crimson;
        
    }
</style>
