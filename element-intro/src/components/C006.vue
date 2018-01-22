<template>
  <div>        
    <el-container>
      <el-header>
        <h1>Botones de Acción</h1>
      </el-header>
      <el-main>
        
        <el-row type="flex" justify="center">
          
          <!--
          <el-col :span="3">
            <el-card class="btn-accion" @click.native="printNewWindow">
              <img class="imgAccion" src="../assets/printer.svg">
              <span>Inmuebles</span>
            </el-card>
          </el-col>
          -->


          <el-col :span="3">
            <div class="w3-card btn-accion noprint" @click.native = "sendMail">
              <img class="imgAccion" src="../assets/sendemail.svg">
              <el-row>
                &nbsp
              </el-row>
              <el-row>
                Inmuebles
              </el-row>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="w3-card btn-accion noprint" @click.native = "sendMail">
              <img class="imgAccion" src="../assets/sendemail.svg">
              <el-row>
                Todas
              </el-row>
              <el-row>
                Autorizaciones
              </el-row>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="w3-card btn-accion noprint" @click.native = "sendMail">
              <img class="imgAccion" src="../assets/sendemail.svg">
              <el-row>
                Histórico de
              </el-row>
              <el-row>
                Comunicaciones
              </el-row>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="w3-card btn-accion noprint" @click.native = "sendMail">
              <img class="imgAccion" src="../assets/sendemail.svg">
              <el-row>
                Histórico de
              </el-row>
              <el-row>
                Cambios
              </el-row>
            </div>
          </el-col>
          </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  
  export default {
    name: 'C006',
    data() {
      return {
      }
    },
    methods: {
        
    }, 
    create() {
      console.log('Me creo');
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
    color: #abdcf3;
  }

</style>

<style>
  .btn-accion {
    width: 120px;
    height: 120px;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    margin: 10px;
    transition: .2s;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .btn-accion:hover {
    transform: scale(1.15);
    background-color: #c6edf4;
    cursor: pointer;
  }

  .imgAccion {
    width: 60px;
    padding-top: 10px;
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
