<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { useStore } from '@/store';
import { Toast } from 'vant'; 

@Options({
  watch:{
    loadingNum(newNum: number, oldNum: number) {
      if (newNum > 0) {
        this.$toast.loading({message: '加载中...', forbidClick: true});
      } else {
        this.$toast.clear();
      }
    }
  },
})
export default class App extends Vue {

  get loadingNum() {
    return this.$store.state.num.num;
  }
}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
