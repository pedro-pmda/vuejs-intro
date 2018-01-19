<template>
  <div>
    <el-container>
      <el-header class="divider">
        <h1>Autorizaciones Totales</h1>
        <h2>En uso \ Total</h2>
      </el-header>

      <el-main class="divider">
        <el-row>
          <el-col :span="8">
            <img class="imgStatics" src="../assets/casa.svg"></img>
          </el-col>
          <el-col :span="8">
            <img class="imgStatics" src="../assets/garaje.svg"></img>
          </el-col>
          <el-col :span="8">
            <img class="imgStatics" src="../assets/otrosinmuebles.svg"></img>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <h2>Viviendas</h2>
          </el-col>
          <el-col :span="8">
            <h2>Garajes</h2>
          </el-col>
          <el-col :span="8">
            <h2>Trasteros / Locales /S/A</h2>
          </el-col>
        </el-row>

        <template v-for="(estadistica,index) in estadisticas" class="statrow">
          <el-row>
            <el-col :span="8">
              <span class="statnumber"> {{estadistica.viviendas[0]}}
                <span v-if="estadistica.viviendas.length > 1">/ {{estadistica.viviendas[1]}}</span>
              </span>
            </el-col>
            <el-col :span="8">
              <span class="statnumber"> {{estadistica.garajes[0]}}
                <span v-if="estadistica.garajes.length > 1">/ {{estadistica.garajes[1]}}</span>
              </span>
            </el-col>
            <el-col :span="8">
              <span class="statnumber"> {{estadistica.otros[0]}}
                <span v-if="estadistica.otros.length > 1">/ {{estadistica.otros[1]}}</span>
              </span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              {{ estadistica.tipo }}
            </el-col>
            <el-col :span="8">
              {{ estadistica.tipo }}
            </el-col>
            <el-col :span="8">
              {{ estadistica.tipo }}
            </el-col>
          </el-row>
        </template>
      </el-main>
    </el-container>

    <el-row type="flex" justify="center" class="noprint">
      <el-col :span="3">
        <el-card class="btn-accion" @click.native="printNewWindow">
          <img class="imgAccion" src="../assets/printer.svg">
          <span>Imprimir</span>
        </el-card>
      </el-col>

      <el-col :span="3">
        <el-card class="btn-accion">
          <img class="imgAccion" src="../assets/sendemail.svg">
          <span>Email</span>
        </el-card>
      </el-col>
    </el-row>

  </div>

</template>

<script>
  export default {
    name: 'C002',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        estadisticas: [{
            tipo: 'Puntuales (anuales)',
            viviendas: [15, 120],
            garajes: [47, 60],
            otros: [5, 60]
          },
          {
            tipo: 'Libre disposición',
            viviendas: [7, 15],
            garajes: [0, 10],
            otros: [0, 5]
          },
          {
            tipo: 'Ordinarias',
            viviendas: [1, 5],
            garajes: [15, 1],
            otros: ['N', 'A']
          },
          {
            tipo: 'Antiguo APR',
            viviendas: [15],
            garajes: [10],
            otros: [1]
          },
          {
            tipo: 'Especiales',
            viviendas: [1],
            garajes: [0],
            otros: [1]
          }
        ]
      }
    },      
    methods: {
      printNewWindow: function () {
       window.print();
     }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
    margin: 0px;
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
  .imgStatics {
    width: 90px;
  }

  .statnumber {
    font-size: 2.25rem;
  }

  .statrow {
    margin: 15px;
  }

  .divider {
    border-bottom: 1px solid #ebebeb;
    border-radius: 3px;
    transition: .2s;
  }


  .btn-accion {
    width: 120px;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    transition: .2s;
  }

  .btn-accion:hover {
    transform: scale(1.15);
    background-color: #c6edf4;
    cursor: pointer;
  }

  .imgAccion {
    width: 55px;
  }

  .imgStatics {
    width: 90px;
  }

  .statnumber {
    font-size: 2.25rem;
  }

  .statrow {
    margin: 15px;
  }

  .divider {
    border-bottom: 1px solid #ebebeb;
    border-radius: 3px;
    transition: .2s;
  }

  @media print
  {
  .noprint {display:none;}
  }

</style>
