<template>
  <div>
    <div class="tabbal">
      <div class="item"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
  props: {},
  data () {
    return {}
  },
  methods: {}
}
</script>
<style>
.tabbal{
  width: 100%;
  height: 9.8rem;
  position: fixed;
  bottom: 0px;
  left: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tabbal>.item{
  width: 33.33%;
  height: 100%;
}
</style>