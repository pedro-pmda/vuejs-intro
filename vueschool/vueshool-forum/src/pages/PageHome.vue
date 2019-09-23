<template>
  <div class="col-full push-top">
    <h1>Welcome to Forum.</h1>
    <CategoryList :categories="categories"/>
  </div>
</template>

<script>
import CategoryList from '@/components/CategoryList'

export default {
  components: {
    CategoryList
  },
  computed: {
    categories () {
      return Object.values(this.$store.state.categories)
    }
  },
  beforeCreate () {
    // best places to AJAX functions
    console.log('📡 beforeCreate', this.categories)
  },
  created () {
    console.log('📡 created', this.categories)
  },
  beforeMount () {
    console.log('📡 beforeMount', this.categories)
  },
  mounted () {
    // Mount virutal DOM into DOM
    console.log('📡 mounted', this.categories, this.$el.innerText)
  },
  beforeDestroy () {
    // best place to turn off listeners
    console.log('📡 beforeDestroy .turn off listesners', this.categories, this.$el.innerText)
  },
  destroyed () {
    // not access to $el properties
    console.log('📡 destroyed', this.categories)
  }
}
</script>
