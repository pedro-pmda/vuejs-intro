<template>
  <div class="col-full">
    <CategoryListItem v-for="category in categories" :key="category['.key']" :category="category"></CategoryListItem>
  </div>
</template>

<script>
import CategoryListItem from './CategoryListItem'

export default {
  components: {
    CategoryListItem
  },
  props: {
    categories: {
      required: true,
      type: Array
    }
  }
}
</script>

<style>
</style>
