import axios from 'axios'
const state = {
    CurrentUser: [],
    IsAuthenticated_data: false,
};
const getters = {
    get_CurrentUser: (state) => state.CurrentUser,
    IsAuthenticated_data: (state) => state.IsAuthenticated_data,
};

const actions = {
    async IsAuthenticated({ commit }) {
        const res = await axios.get(`/api/authenticated`)
        .catch((e) => {
            commit('SET_AUTHENTICATED', false);
        })
       
        if (res.data == 1) {
            window.localStorage.setItem('is_authenticated', true);
        }
      
    return res.data;
},
    async fetchCurrentUser() {
        if (state.CurrentUser.length == 0) {
            const res = await axios.get(`/api/user`)
            if(res){
                state.CurrentUser = res.data;
            }
        }
    },
  



};
const mutations = {
   
    SET_AUTHENTICATED: (state, IsAuthenticated_data) => (state.IsAuthenticated_data = IsAuthenticated_data),


};

export default {
    state,
    getters,
    actions,
    mutations
};
