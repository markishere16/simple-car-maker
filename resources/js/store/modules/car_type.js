import axios from 'axios'
const state = {
    car_types: [],

};
const getters = {
    get_car_types: (state) => state.car_types,

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

    async fetchCarTypes({
        commit
    }) {
        await axios.get('/api/car-type/all')
            .then((res) => {
                commit('SET_CAR_TYPES', res.data);
            })
            .catch(error => {
                console.log(error);
            })
    },

    async insertCarType({
        commit
    }, {vm, payload}) {

        await axios.post('/api/car-type/insert', payload)
            .then((res => {
                commit('NEW_CAR_TYPE', res.data.data);
                actions.toastSuccess(vm,res.data.message);
            }))
            .catch(error => {
                actions.toastError(vm,error.response.data.message);
              
            })

    },

    async updateCarType({
        commit
    }, {vm, payload}) {

        await axios.put('/api/car-type/update', payload)
            .then((res => {
                commit('UPDATE_CAR_TYPE', res.data.data);
                actions.toastSuccess(vm,res.data.message);
            }))
            .catch(error => {
                actions.toastError(vm,error.response.data.message);
            })
    },


    async deleteCarType({
        commit
     }, {vm, payload}) {
      await  axios.delete('api/car-type/delete/' +payload.id)
            .then(res => {
                commit('DELETE_CAR_TYPE', payload.id);
                actions.toastSuccess(vm,res.data.message);
            })
            .catch(error => {
                actions.toastError(vm,error.response.data.message);
            })
    },




};
const mutations = {
    SET_CAR_TYPES: (state, car_type) => (state.car_types = car_type),

    NEW_CAR_TYPE: (state, car_type) => (state.car_types.push(car_type)),

    UPDATE_CAR_TYPE: (state, car_type) => {
        var index = state.car_types.findIndex(function (item) {
            return item.id == car_type.id;
        });
        
        state.car_types[index] = car_type;
    },

    DELETE_CAR_TYPE: (state, car_color_id) => {
        state.car_types = state.car_types.filter(item => item.id !== car_color_id);
    },




};

export default {
    state,
    getters,
    actions,
    mutations
};
