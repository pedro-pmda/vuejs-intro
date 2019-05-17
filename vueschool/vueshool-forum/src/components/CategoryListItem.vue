<template>
  <div>
    <h2 class="list-title">
      <router-link :to="{name: 'Category', params: {id: category['.key']}}">{{category.name}}</router-link>
    </h2>

    <ForumList :forums="forumsByCat" :categoryName="category.name"></ForumList>
  </div>
</template>

<script>
import sourceData from '@/data.json' // @ igual src/ path
import ForumList from './ForumList'

export default {
  components: {
    ForumList
  },

  props: {
    category: {
      required: true,
      type: Object
    }
  },

  computed: {
    forumsByCat () {
      return Object.values(sourceData.forums).filter(
        forum => forum.categoryId === this.category['.key']
      )
    }
  }
}
</script>

<style>
</style>
