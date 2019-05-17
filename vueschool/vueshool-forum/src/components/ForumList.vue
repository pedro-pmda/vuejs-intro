<template>
  <div class="forum-list">
    <ForumListItem v-for="forum in forums" :forum="forum" :key="forum['.key']"></ForumListItem>
  </div>
</template>

<script>
import ForumListItem from './ForumListItem'

export default {
  components: {
    ForumListItem
  },

  props: {
    forums: {
      required: true,
      type: Array
    },
    categoryName: {
      required: true,
      type: String
    }
  }
}
</script>

<style scoped>
</style>
