<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/c002">Componente 002</router-link>
    <br>
    <router-link to="/c003">Componente XXX Impresion y envío Email</router-link>
    <br>
    <router-link to="/c006">Componente 006 Botones de Acción</router-link>
  </div>
</template>

<script>
export default {
  name: 'Componentes',
  data () {
    return {
      msg: 'Directorio de Componentes'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
