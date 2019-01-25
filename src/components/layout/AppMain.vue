<template>
  <div class="wrapper">
    <app-header></app-header>
    <router-view/>
  </div>
</template>
<script>
import { Vue, Component } from 'vue-property-decorator';
import AppHeader from './AppHeader.vue';

@Component({
  components: {
    AppHeader,
  },
})
export default class Main extends Vue {
}
</script>
<style lang="less" scoped>
.wrapper{
  padding-top: 60px;
}
</style>
