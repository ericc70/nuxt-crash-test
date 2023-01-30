<template>
  <section>
    <p>Product detail for {{ id }}</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum provident ad aliquam consectetur non quas enim sequi soluta at perspiciatis, earum magni voluptate, obcaecati assumenda dolore dicta nulla, corporis aspernatur.</p>
  </section>
</template>

<script setup>
    const {id } = useRoute().params
        definePageMeta({
        layout: 'products'
    })

</script>

<style>

</style>