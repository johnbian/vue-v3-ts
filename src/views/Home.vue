<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <Button class="btn" type="primary">test vant</Button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import api from '@/api/api';

@Options({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  public created(): void {
    api.nameSet();
    this.$store.dispatch('user/setUserInfo', {token: '11ws22s33ssdass'});
  }
}
</script>

<style scoped lang="scss">
  .home {
    .btn {
      font-size: 36px;
    }
  }
</style>
