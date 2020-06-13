<template>
  <div>
    <div class="tabbal">
      <div
        @click="gogogo(index)"
        :class="['item', item.default && 'blue']"
        :style="{width: `${100/list.length}%`}"
        v-for="(item,index) in list"
        :key="index"
      >
        <img v-if="!item.isSvg" class="item-img" :src="item.img" alt />
        <div v-else v-html="item.img" class="item-svg"></div>
        <span>{{item.txt}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import svg from "./svg";
export default {
  name: "Tabbal",
  props: {
    list: {
      type: Array,
      default: () => [
        {
          txt: "e",
          img: svg.chat,
          default: true,
          isSvg: false,
          path: "/chat"
        },
        {
          txt: "通讯录",
          img: svg.mailList,
          default: false,
          isSvg: false,
          path: "/mailList"
        },
        {
          txt: "我的",
          img: svg.user,
          default: false,
          isSvg: false,
          path: "/user"
        }
      ]
    }
  },
  data() {
    return {};
  },
  created() {
    for (let v of this.list) {
      if (v.img.indexOf("<svg") >= 0) {
        v.isSvg = true;
      }
    }
  },
  methods: {
    gogogo(i) {
      var list = this.list;
      if (list[i].default) return;
      this.$router.replace({ path: list[i].path });
      for (let v of list) {
        v.default = false;
      }
      list[i].default = true;
      this.list = list;
    },
    changeURL() {
      let uri = this.$route.path;
      const list = this.list;
      for (let i in list) {
        list[i].default = false;
        if (uri == list[i].path) {
          list[i].default = true;
        }
      }
      if (uri == "/") {
        list[0].default = true;
      }
      this.list = list;
    }
  },
  watch:{
    $route:{
      handler(){
        this.changeURL()
      },
      deep: true
    }
  },
  mounted() {
    this.changeURL()
  }
};
</script>
<style scoped>
.tabbal {
  width: 100%;
  height: 6.6rem;
  position: fixed;
  bottom: 0px;
  left: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgb(226, 226, 226);
  background-color: rgb(247, 247, 247);
}
.tabbal > .item {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.8rem;
}
.item-img,
.item-svg {
  width: 3.3rem;
  height: 3.3rem;
}
.item-svg > svg {
  width: 100%;
  height: 100%;
}
.blue {
  background-color: rgb(212, 238, 224);
}
.item span{
  margin-top: 0.5rem;
}
</style>