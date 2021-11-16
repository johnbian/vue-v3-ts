import Vuex from 'vuex';
import num from './modules/num';
import user from './modules/user';
import createPersistedState from 'vuex-persistedstate';


export default new Vuex.Store({
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
