<template>
  <section>
    <Head>
      <Title>Nuxt Crash | {{ product.title }}</Title>
      <Meta name="description" :content="product.description" />
    </Head>
    <div>
      <ProductDetails :product="product" />
    </div>
  </section>
</template>

<script setup>
const { id } = useRoute().params;
const uri = "https://fakestoreapi.com/products/" + id;
// fetch the products
const { data: product } = await useFetch(uri, { key: id });

if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Product not found",
    fatal: true,
  });
}

definePageMeta({
  layout: "products",
});
</script>

<style></style>
