<template>
    <div id="info-profilo">
      <div id="livello">
        <span> LVL {{getLvl()}}</span>
        <div id="barra">
             <div id="fillBar" v-bind:style= "getExpBar()"></div>
        </div>
      </div>
      <div id="nomecognome">
        <span>{{nome}}</span> <span>{{cognome}}</span>
        <img src="media/settings_icon.png" alt="">
      </div>
      <!-- <button v-on:click="exp += 10">Add 10</button>
      <button v-on:click="exp += 15">Add 15</button>
      <button v-on:click="exp += 30">Add 30</button> -->
    </div>
</template>

<script>
export default {
  name: 'infoProfilo',
  data: function() {
    return{
      nome: 'Mario',
      cognome: 'Rossi',
      exp: 175,
    }
  },
  methods: {
      getLvl: function(){
        var level = this.exp/100;
        return Math.trunc(level);
      },
      getExpBar: function(){
          var exp = this.exp;
          var level = Math.trunc(exp / 100);
          var centesimal = exp - (level * 100) ;
          return "width: " + centesimal + '%';
      }
  }
}
</script>


<style lang="scss">
    #info-profilo{
        width: 60%;
        height: 70%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        #livello{
            font-size: 20px;
            #barra{
                width: 100%;
                height: 10px;
                border: 1px solid black;
                border-radius: 20px;
                display: inline-block;
                #fillBar{
                    height: 100%;
                    width: 20%;
                    border-radius: 20px;
                    background-color: green;
                    transition: 0.3s linear;
                }
            }
        
        }
        #nomecognome{
            font-size: 30px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            img {
              display: inline;
              width: 30px;
              height: 30px;
            }
        }
    }
</style>