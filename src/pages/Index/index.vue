<template>
    <div class="index" :style="{backgroundImage:'url('+bgc+')'}">
      <div class="header">
        <div class="left">
          <a href="" @click.prevent="goPage('Live')">直播</a>
          <a href="" @click.prevent="">视频</a>
          <a href="" @click.prevent="">图文</a>
          <a href="" @click.prevent="">语音</a>

        </div>
        <div class="right">
          <a href="" @click.prevent="">登录</a>/
          <a href="" @click.prevent="">注册</a>
          <a href="" @click.prevent="" style="margin-left:.3rem;">更多</a>

        </div>
      </div>
      <div class="cont">
        <div class="cont1">
          <div style="width:4rem;height:1.7rem;">
            <img src="../../assets/imgs/logo.png" style="width:100%;height: 100%; " />
          </div>
          <div class="div2">

            <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">

              <el-button  slot="append" icon="el-icon-search" @click="search"></el-button>

            </el-input>

          </div>

        </div>
      </div>
      <Footer></Footer>
    </div>
</template>

<script>
    import Footer from "../../components/Footer/Footer";
    export default {
        name: "index",
      components: {Footer},
      data(){
          return{
            bgc:"",
            input3:""
          }
        },
      methods:{
        goPage(path){
          this.$router.push({name:path,params:{data:11}})
        },
        aa(){
          alert(1)
        },
        search(){

        }
      },
        mounted(){
          let data={bgc:""}
          this.bgc=data.bgc?data.bgc:require("../../assets/imgs/indexbg.jpg");
        }
    }
</script>

<style scoped lang="scss">
.index{
  color:white;
  width:100%;
  height: 100%;
  background-size:100% calc(100vh);
  background-repeat: no-repeat;
  .header{
    height:0.5rem;
    line-height:0.5rem;
    display: flex;
    width:80%;
    margin:0 auto;

    .left{
      flex:1;
      a{
        margin-left:.5rem;
      }
    }
    .right{
      flex:1;
      display: flex;
      justify-content: flex-end;
    }
  }
  .cont{
    .cont1{
      width:80%;
      margin:2rem auto;
      display: flex;
      .div2{
        line-height: 1.8rem;
        height:1.8rem;
      }
    }
  }
}
</style>
<style lang="scss">
  .el-input-group--append .el-input__inner{
    width:7rem;
    height:.7rem;
  }
</style>
