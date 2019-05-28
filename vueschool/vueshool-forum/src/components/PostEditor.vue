<template>
  <form @submit.prevent="save">
    <div class="form-group">
      <textarea name id cols="30" rows="10" class="form-input" v-model="text"></textarea>
    </div>

    <div class="form-action">
      <button class="btn-blue">Submit post</button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    threadId: {
      require: true
    }
  },
  data () {
    return {
      text: ''
    }
  },
  methods: {
    save () {
      const post = {
        text: this.text,
        threadId: this.threadId
      }
      console.log(`Justo antes del dispatch`)
      console.log(post)
      this.$store.dispatch('createPost', post)
      this.text = ''
    }
  }
}
</script>
<style>
</style>
