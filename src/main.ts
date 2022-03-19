import { createApp, ComponentCustomProperties } from 'vue';
import App from './App.vue';
import router from './router';
import { store, key } from './store';
import { Button, Toast } from 'vant';
import { Store } from 'vuex';
import { State } from './interface';


declare module '@vue/runtime-core' {

  // 为 `this.$store` 提供类型声明
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}

const app: any = createApp(App);
app.component('Button', Button);
app.use(store, key).
use(router).
use(Toast).mount('#app');
