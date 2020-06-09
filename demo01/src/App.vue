<template>
  <div id="app">
    <title />
    <div class="main"> 
      <router-view/>
    </div>
    <tabbal />
  </div>
</template>

<script>
import tabbal from './components/tabbal'
import title from './components/title'
export default {
  name: 'App',
  components:{
    tabbal,
    title,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}
.main{
  height: calc(100vh - 9.8rem);
  width: 100%;
}

</style>
