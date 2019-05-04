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
      const postId = 'greatPost' + Math.random()

      const post = {
        text: this.text,
        publishedAt: Math.floor(Date.now() / 1000),
        threadId: this.id,
        userId: 'ALXhxjwgY9PinwNGHpfai6OWyDu2',
        '.key': postId
      }
      this.$emit('save', { post })
      this.text = ''
    }
  }
}
</script>
<style>
</style>
