<template>
    <div style="border:1px solid red;width: 5rem;" ><a href="" class="aa">bb</a></div>
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
