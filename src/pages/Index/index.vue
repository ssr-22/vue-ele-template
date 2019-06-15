<template>
    <div style="border:1px solid red;width: 100%;" >
      <el-row>
        <el-col :span="12"><div>
          <el-button>hh</el-button>
        </div></el-col>
      </el-row>
    </div>
</template>

<script>
    export default {
        name: "index",
        mounted(){
          console.log($(".aa").html());
        }
    }
</script>

<style scoped lang="scss">
div{
  .aa{
    color:red;
  }
}
</style>
