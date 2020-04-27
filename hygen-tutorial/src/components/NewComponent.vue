<template>
  <div class="new-component">
    <h1>My new Vue Component</h1>
  </div>
</template>
<script>
  export default {
    name: "NewComponent",
    props: {
      msg: String,
    },
    methods: {},
  };
</script>
<style scoped></style>
