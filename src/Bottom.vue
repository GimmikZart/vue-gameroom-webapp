<template>
    <div id="navBar">
      <a href=""><img src="media/controller_icon.png" alt=""></a>
      <a href=""> <img src="media/ranking_icon.png" alt=""></a>
      <a href="">
        <div id="prenota-button">
          <h4>PRENOTA</h4>
        </div>
      </a> 
      <a href=""><img src="media/events_icon.png" alt=""></a>
      <a href=""><img src="media/settings_icon.png" alt=""></a> 
    </div>
</template>

<script>

export default {
  name: 'Bottom',
  components: {
    
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
  #navBar {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      border-top: 2px solid black;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(167,44,135,1) 25%, rgba(37,21,138,1) 53%);      
      img {
          width: auto;
          height: 30px;
      }
      a{
          text-decoration: none;
          #prenota-button{
          width: 40px;
          height: 40px;
          color: rgba(0, 0, 0, 0.842);
          border-radius: 50%;
          border: 0px solid black;
          padding: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle, rgba(217,214,0,0.8099614845938375) 34%, rgba(255,0,249,1) 90%);
          h4 {
              font-size: 15px;
              text-align: center;
              text-decoration: none;
          }
      }
      }
    }

</style>
