<template>
    <div id="userNav">
      <imgProfilo></imgProfilo>
      <infoProfilo></infoProfilo> 
    </div>
</template>

<script>
import imgProfilo from './components/img_profilo.vue'
import infoProfilo from './components/info_profilo.vue'

export default {
  name: 'UserNav',
  components: {
    imgProfilo,
    infoProfilo
  }
}
</script>

<style lang="scss">
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
  #userNav {
      background-color: rgb(206, 0, 0);
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      border-bottom: 2px solid black;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }

</style>
