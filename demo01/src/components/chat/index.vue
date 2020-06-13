<template>
  <div>
    <div class="list">
      <div class="item" v-for="(item,index) in 99" :key="index" @click="go">
        <img class="i-img" src="" alt="">
        <div class="i-right">
          <div class="r1">
            <span class="name">name1</span>
            <span>time</span>
          </div>
          <div class="r2">11111111111111111111111111111111111111111</div>
        </div>
      </div>
    </div>
    <!-- <span @click="go">chat</span> -->
  </div>
</template>
<script>
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  methods: {
    go() {
      this.$router.push("/q/index");
    }
  },
  mounted(){
  }
};
</script>
<style scoped>
.list {
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: 100%;
  border-top: 1px solid rgb(222, 222, 222);
  border-bottom: 1px solid rgb(222, 222, 222);
}
.list>.item{
  width: 100%;
  height: 7.7rem;
  display: flex;
  align-items: center;
}
.list>.item>.i-img{
  width: 5.2rem;
  height: 5.2rem;
  border-radius: 0.4rem;
  border: 1px solid red;
  margin-right: 0.8rem;
  margin-left: 2rem;
}

.list>.item>.i-right{
  width: calc(100% - 8rem);
  height: 100%;
  border-bottom: 1px solid rgb(240, 240, 240);
  padding: 0.8rem 2rem;
  padding-left: 0;
}
.list>.item>.i-right>.r1{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgb(217, 217, 217);
  font-size: 1.6rem;
}
.list>.item>.i-right>.r1>.name{
  color: rgb(26, 26, 26);
  font-size: 2rem;
}
.list>.item>.i-right>.r2{
  color: rgb(179, 179, 179);
  font-size: 1.8rem;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>