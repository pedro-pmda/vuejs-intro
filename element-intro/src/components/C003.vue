<template>
  <div>        
    <el-container>
      <el-header>
        <h1>Componente de Impresión</h1>
      </el-header>
      <el-main>
        <el-row type="flex" justify="center">
          <el-col :span="3">
            <el-card class="btn-accion" @click.native="printNewWindow">
              <img class="imgAccion" src="../assets/printer.svg">
              <span>Imprimir</span>
            </el-card>
          </el-col>

          <el-col :span="3">
            <el-card class="btn-accion noprint" @click.native = "sendMail">
              <img class="imgAccion" src="../assets/sendemail.svg">
              <span>Email</span>
            </el-card>
          </el-col>
        </el-row>

      </el-main>
    </el-container>
  </div>
</template>

<script>
  
  export default {
    name: 'C003',
    data() {
      return {
        divContents :'',        
        printWindow: '',
        link: ''
      }
    },
    methods: {
      printNewWindow: function () {
        console.log('Entro a Imprimir');
        window.print();        
      },
      sendMail: function () {
          window.location.href="mailto:?subject="+document.title+"&body="+escape( window.location.href);

      }
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
