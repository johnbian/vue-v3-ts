import { createStore, Store, useStore as baseUseStore } from 'vuex';
import { InjectionKey } from 'vue';
import num from './modules/num';
import user from './modules/user';
import createPersistedState from 'vuex-persistedstate';

export const key: InjectionKey<Store<any>> = Symbol()

export const store = createStore({
  modules: {
    num,
    user,
  },
  plugins: [createPersistedState({
    storage: window.sessionStorage,
    reducer(val: any) {
      return {
        user: val.user,
      };
    },
  })],
});

export function useStore () {
  return baseUseStore(key)
}
