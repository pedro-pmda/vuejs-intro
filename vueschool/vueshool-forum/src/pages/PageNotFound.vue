          <template>
  <div class="col-full" :class="$style.centered">
    <h1 :class="$style['heading-large']">Not Found</h1>
    <p :class="$style['text-large']">
      Opps, we couldn't find what you are looking for.
      Why don't you
      <router-link :to="{name: 'Home'}">go home instead?</router-link>
    </p>
    <img src="@/assets/NotFound.jpg">
  </div>
</template>

<script>
export default {}
</script>

<style module>
.heading-large {
  font-size: 100px;
}

.text-large {
  font-size: 50px;
  font-weight: 100;
  margin-bottom: 50px;
}

.centered {
  text-align: center;
}
</style>
