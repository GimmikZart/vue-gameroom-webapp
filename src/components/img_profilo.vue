<template>
 <div id="img-profilo">
    <img v-bind:src="foto" alt='img profilo'>
  </div>
</template>

<script>
export default {
  name: 'imgProfilo',
  data: function() {
    return{
      foto: 'media/antonio_menegon.jpg'
    }
  }
    
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

  #img-profilo {
    height: 80%;
    width: auto;
    img {
      height: 100%;
      width: auto;
      border-radius: 50%;
    }
  }
</style>
