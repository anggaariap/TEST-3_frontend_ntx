<template>
  <div class="container mx-auto p-4">
    <h1 class="mb-8 text-3xl font-bold">
      Product Management Application
    </h1>
    <CategoryTable />
  </div>
</template>

<script>
import CategoryTable from "../components/TableCategory.vue";

export default {
  name: "Home",
  components: {
    CategoryTable,
  },
};
</script>

<style>
</style>
