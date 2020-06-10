<template>
  <div class="content">
    <div v-if="showBack" class="back" @click="goBack">
      <svg
        t="1591779133491"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="3043"
        width="32"
        height="32"
      >
        <path
          d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z"
          fill="#ffffff"
          p-id="3044"
        />
      </svg>
    </div>
    <span>{{showTitle}}</span>
  </div>
</template>
<script>
export default {
  name: "Title",
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      showTitle: "",
      showBack: false
    };
  },
  created() {
    this.showTitle =
      this.title == this.$route.name ? this.title : this.$route.name;
      this.init(this.$route)
  },
  watch: {
    $route: {
      handler: function(val, oldVal) {
        this.init(val)
      },
      // 深度观察监听
      deep: true
    }
  },
  methods: {
    init(val) {
      this.showTitle = val.name;
      if (val.path.split("/").length > 2) {
        this.showBack = true;
      } else {
        this.showBack = false;
      }
      this.showTitle = val.name;
    },
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped>
.content {
  width: 100%;
  height: 6.6rem;
  text-align: center;
  line-height: 6.6rem;
  color: rgb(24, 24, 24);
  font-size: 1.6rem;
  background-color: rgb(237, 237, 237);
  position: fixed;
  top: 0;
  left: 0;
}
.back {
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
}
</style>