<template>
  <div class="mine">
    <Header :title="'个人中心'"></Header>
    <div class="cont">
      <div class="cont1 outshadow">
        <div class="tool">
          <div class="icon1">
            <img src="../../../static/imgs/menu.png" alt="">
            <div>工具</div>
          </div>
          <div class="c_2">
            <a href="" @click.prevent="">搜索</a>
          </div>
          <div class="c_3">
            <a href="" @click.prevent="">云盘</a>
          </div>
          <div class="c_4">
            <a href="" @click.prevent="">日志</a>
          </div>
        </div>
        <div class="line">
        </div>
        <div class="live">
          <div class="icon1">
            <img src="../../../static/imgs/live.png" alt="">
            <div>直播</div>
          </div>
          <div class="c_2">
            <a href="" @click.prevent="">视频直播</a>
          </div>
          <div class="c_3">
            <a href="" @click.prevent="">语音直播</a>
          </div>
        </div>
        <div class="line">
        </div>
        <div class="media">
          <div class="icon1">
            <img src="../../../static/imgs/media.png" alt="">
            <div>媒体</div>
          </div>
          <div class="c_2">
            <a href="" @click.prevent="">我的媒体渠道</a>
          </div>
        </div>
        <div class="line">
        </div>
        <div class="dev">
          <div class="icon1">
            <img src="../../../static/imgs/programming.png" alt="">
            <div>开发</div>
          </div>
          <div class="c_2">
            <a href="" @click.prevent="">开发者中心</a>
          </div>

        </div>
      </div>

      <div class="cont2">

      </div>
      <div class="cont3">

      </div>
    </div>
  </div>
</template>

<script>
  import Header from "../../components/Header/Header";
  import {mapActions} from "vuex"
  export default {
    name: "Mine",
    components: {Header},
    methods:{
      ...mapActions("common",["getDataState"])
    },
    mounted(){
      let obj={
        url:"/ajax/movieOnInfoList?token="
      }
      this.getDataState(obj)
    }
  }
</script>

<style scoped lang="scss">
.mine{
  a { color:black; }
  a:hover{
    color:#c53518;
  }
  .cont{
    .icon1{
      text-align: center;
    }
    width:80%;
    margin:0 auto;
    .cont1{
      height:1.3rem;
      display: flex;
      margin-top:.3rem;
      img{
        width:.6rem;
        height:.6rem;
      }
      .tool,.media,.live,.dev{
        margin-left:.1rem;
        display: flex;
        flex:1;
        justify-content: center;
        align-items: center;
        div{
          flex:1
        }
      }
    }
  }
}
</style>
