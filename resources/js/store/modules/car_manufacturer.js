import axios from 'axios'
const state = {
    manufacturers: [],

};
const getters = {
    get_manufacturers: (state) => state.manufacturers,

};

const actions = {

    
    toastSuccess (vm,message){
        vm.$toasted.success(message, {
            position: 'top-center',
            duration: 5000,
            icon: "check",
        })
    },

    toastError (vm,message){
        vm.$toasted.error(message, {
            position: 'top-center',
            duration: 5000,
            icon: "warning",
        })
    },

    async fetchManufacturers({
        commit
    }) {
        await axios.get('/api/car-manufacturer/all')
            .then((res) => {
                commit('SET_MANUFACTURERS', res.data);
            })
            .catch(error => {
                console.log(error);
            })
    },

    async insertManufacturer({
        commit
    }, {vm, payload}) {

        await axios.post('/api/car-manufacturer/insert', payload)
            .then((res => {
                commit('NEW_MANUFACTURER', res.data.data);
                actions.toastSuccess(vm,res.data.message);
            }))
            .catch(error => {
                actions.toastError(vm,error.response.data.message);
              
            })

    },

    async updateManufacturer({
        commit
    }, {vm, payload}) {

        await axios.put('/api/car-manufacturer/update', payload)
            .then((res => {
                commit('UPDATE_MANUFACTURER', res.data.data);
                actions.toastSuccess(vm,res.data.message);
            }))
            .catch(error => {
                actions.toastError(vm,error.response.data.message);
            })
    },


    async deleteManufacturer({
        commit
     }, {vm, payload}) {
      await  axios.delete('api/car-manufacturer/delete/' +payload.id)
            .then(res => {
                commit('DELETE_MANUFACTURER', payload.id);
                actions.toastSuccess(vm,res.data.message);
            })
            .catch(error => {
                actions.toastError(vm,error.response.data.message);
            })
    },




};
const mutations = {
    SET_MANUFACTURERS: (state, manufacturer) => (state.manufacturers = manufacturer),

    NEW_MANUFACTURER: (state, manufacturer) => (state.manufacturers.push(manufacturer)),

    UPDATE_MANUFACTURER: (state, manufacturer) => {
        var index = state.manufacturers.findIndex(function (item) {
            return item.id == manufacturer.id;
        });
        
        state.manufacturers[index] = manufacturer;
    },

    DELETE_MANUFACTURER: (state, manufacturer_id) => {
        state.manufacturers = state.manufacturers.filter(item => item.id !== manufacturer_id);
    },




};

export default {
    state,
    getters,
    actions,
    mutations
};
