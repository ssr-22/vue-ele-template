<template>
  <div class="footer">
    <div class="cont">
        <span>
          <a href="" >关于我们</a>
        </span>
      <span>
          <a href="" >关于Qosws系统</a>
        </span>
      <span>
          <a href="" >关于app端</a>
        </span>
      <span>
          <a href="" >使用前必看</a>
        </span>

    </div>

  </div>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped lang="scss">
  .footer {
    position: absolute;
    bottom: 0;
    height: 1rem;
    line-height: 1rem;
    width: 100%;
    background: #333;
    .cont{
      display: flex;
      width:50%;
      margin:0 auto;
      height:100%;
      span{
        flex:1;
      }
    }
  }
</style>
