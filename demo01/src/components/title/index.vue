<template>
  <div class="main">
    <span>{{this.props.title}}</span>
  </div>
</template>
<script>
export default {
  name: "App",
  props: {
    title: String,
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style>
.main{
  width: 100%;
  height: 6.6rem;
  text-align: center;
  line-height: 6.6rem;
  color: #000000;
  font-size: 1.6px;
}
</style>