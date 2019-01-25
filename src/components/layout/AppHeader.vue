<template>
  <div class="wrapper">
    <router-link to="/home">
      <div class="logo">logo</div>
    </router-link>

    <div class="btns"></div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { State } from 'vuex-class';
import { UserInfo } from '@/types';

@Component
export default class AppHeader extends Vue {
  @State userInfo!: UserInfo;
  test: string = '1';
  mounted() {
    console.log(this.test, this.userInfo);
  }
  handleSave() {
    console.log(this.test, this.userInfo);
  }
}
</script>
<style lang="less" scoped>
.wrapper {
  padding: 0 25px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  display: flex;
  justify-content: space-between;
  height: 60px;
  background: #09c;
  line-height: 60px;
  color: #fff;
}
.logo {
  color: #fff;
}
.btns {
  a {
    color: #fff;
    margin-left: 20px;
  }
}
</style>
