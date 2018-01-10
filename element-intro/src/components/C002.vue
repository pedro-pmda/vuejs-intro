<template>
  <div class="hello">
    

        <el-row>
            <el-col :span="12">
            <el-code>var= 1</el-code>
            </el-col>
            <el-col :span="12">
                <h1>{{ msg }}</h1>               
            </el-col>
            <h1>{{ msg }}</h1>   
        </el-row>    

  
        
        <el-button @click="show = !show">Click Me</el-button>
    <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="el-zoom-in-center">
        <div v-show="show" class="transition-box">.el-fade-in-linear</div>
      </transition>
      <transition name="el-fade-in">
        <div v-show="show" class="transition-box">.el-fade-in</div>
      </transition>
    </div>
  
  </div>
</template>

<script>
export default {
  name: 'C002',
  data () {
    return {
      msg: 'Bienvenido al componente 2',
      show: true
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
<style>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>