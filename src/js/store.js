import Vuex from 'vuex';

export default new Vuex.Store({
  state: {
    currentLanguage: parseInt(localStorage.getItem('currentLanguage')) || 1,
    authUser: false,    
    authByWeb3: false,
    globalModalError: false,
    globalErrorNumber: 0,
    user: {
      id: 0,
      nickname: '',
      django_name: '',
      wallet: '',
      active_table: 0
    },
  },
  mutations: {
    setCurrentLanguage(state, newLanguage) {
      state.currentLanguage = newLanguage;
    },
    setStatusLoggedIn(state) {
      state.authUser = true;
    },
    setStatusLoggedOut(state) {
      state.authUser = false;
    },
    setStatusWeb3In(state) {
      state.authByWeb3 = true;
    },
    setStatusWeb3Out(state) {
      state.authByWeb3 = false;
    },    
    setGlobalModalErrorFalse(state) {
      state.globalModalError = false;      
    },
    setGlobalModalErrorTrue(state) {
      state.globalModalError = true;      
    },
    setGlobalErrorNumber(state, newNumber) {
      state.globalErrorNumber = newNumber;
    },
    setUser(state, user) {
      state.user = user;
    },

  },
  actions: {
    changeLanguage({ commit }, newLanguage) {              
      localStorage.setItem('currentLanguage', newLanguage);
      commit('setCurrentLanguage', newLanguage);
    },
    setGlobalError({ commit }, newNumber) {                    
      commit('setGlobalErrorNumber', newNumber);
    },
    changeStatusLoggedIn({ commit }) {
      localStorage.setItem('authUser', true);      
      commit('setStatusLoggedIn');
    },
    changeStatusLoggedOut({ commit }) {
      localStorage.setItem('authUser', false);      
      localStorage.setItem('authToken', '');
      commit('setStatusLoggedOut');
    },
    changeStatusWeb3In({ commit }) {
      localStorage.setItem('authUserWeb3', true);
      commit('setStatusWeb3In');
    },
    changeStatusWeb3Out({ commit }) {
      localStorage.setItem('authUserWeb3', false);
      commit('setStatusWeb3Out');
    },
    setGlobalModalErrorOn({ commit }) {
      console.log('VUEX: setGlobalModalErrorOn')
      commit('setGlobalModalErrorTrue');
    },
    setGlobalModalErrorOff({ commit }) {
      console.log('VUEX: setGlobalModalErrorOff')
      commit('setGlobalModalErrorFalse');
    },
    setUser({ commit }, user) {
      commit('setUser', user);
    },
  },
  getters: {
    getCurrentLanguage: (state) => state.currentLanguage,
    isAuth: (state) => state.authUser,    
    isAuthWeb3: (state) => state.authByWeb3,
    globalModalError: (state) => state.globalModalError,
    globalErrorNumber: (state) => state.globalErrorNumber,
    getUser: (state) => state.user,
  },
});

