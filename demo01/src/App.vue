<template>
  <div id="app">
    <top />
    <div class="main" :style="{height: hideTabbar ? '100vh' : 'calc(100vh - 6.6rem)' }">
      <router-view />
    </div>
    <Tabbal v-if="!hideTabbar" />
  </div>
</template>

<script>
import Tabbal from "./components/tabbal";
import top from "./components/title";
export default {
  name: "App",
  components: {
    Tabbal,
    top
  },
  mounted() {
    this.init(this.$route)
  },
  watch: {
    $route: {
      handler(nV, oV) {
        this.init(nV)
      }
    }
  },
  data() {
    return {
      hideTabbar: false
    };
  },
  methods: {
    init(nV) {
      if (nV.path.split("/").length > 2) {
        this.hideTabbar = true;
      } else {
        this.hideTabbar = false;
      }
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
}
.main {
  height: calc(100vh - 6.6rem);
  width: 100%;
  padding-top: 6.6rem;
  background-color: rgb(237, 237, 237);
  overflow: scroll;
}
.main::-webkit-scrollbar{
    display: none;
}
</style>
