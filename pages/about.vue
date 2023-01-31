<template>
  <section>
    <h2>about</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptas
      ipsum, voluptatibus ea, fuga eveniet beatae quidem rerum quia praesentium
      tempore? Aspernatur, nisi sunt totam maxime deleniti aut hic architecto.
    </p>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
      corrupti autem impedit atque aliquam ut est alias, deserunt nisi
      voluptatum cumque velit illum, quia magni, beatae ipsam vel nemo
      excepturi!
    </p>
    <div> {{ data }}</div>
  </section>
</template>

<script setup>
   const {data} = await useFetch('./api/crash')

</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>