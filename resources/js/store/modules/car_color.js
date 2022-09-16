import axios from 'axios'
const state = {
    car_colors: [],

};
const getters = {
    get_car_colors: (state) => state.car_colors,

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

    async fetchCarColors({
        commit
    }) {
        await axios.get('/api/car-color/all')
            .then((res) => {
                commit('SET_CAR_COLORS', res.data);
            })
            .catch(error => {
                console.log(error);
            })
    },

    async insertCarColor({
        commit
    }, {vm, payload}) {

        await axios.post('/api/car-color/insert', payload)
            .then((res => {
                commit('NEW_CAR_COLOR', res.data.data);
                actions.toastSuccess(vm,res.data.message);
            }))
            .catch(error => {
                actions.toastError(vm,error.response.data.message);
              
            })

    },

    async updateCarColor({
        commit
    }, {vm, payload}) {

        await axios.put('/api/car-color/update', payload)
            .then((res => {
                commit('UPDATE_CAR_COLOR', res.data.data);
                actions.toastSuccess(vm,res.data.message);
            }))
            .catch(error => {
              
                actions.toastError(vm,error.response.data.message);
            })
    },


    async deleteCarColor({
        commit
     }, {vm, payload}) {
      await  axios.delete('api/car-color/delete/' +payload.id)
            .then(res => {
                commit('DELETE_CAR_COLOR', payload.id);
                actions.toastSuccess(vm,res.data.message);
            })
            .catch(error => {
                if(error.response.status == '500') {
                    actions.toastError(vm,`Unable to delete "${payload.name}" it was referenced in Car`);
                } else {
                    actions.toastError(vm,error.response.data.message);
                }
               
            })
    },




};
const mutations = {
    SET_CAR_COLORS: (state, car_color) => (state.car_colors = car_color),

    NEW_CAR_COLOR: (state, car_color) => (state.car_colors.push(car_color)),

    UPDATE_CAR_COLOR: (state, car_color) => {
        var index = state.car_colors.findIndex(function (item) {
            return item.id == car_color.id;
        });
        
        state.car_colors[index] = car_color;
    },

    DELETE_CAR_COLOR: (state, car_color_id) => {
        state.car_colors = state.car_colors.filter(item => item.id !== car_color_id);
    },




};

export default {
    state,
    getters,
    actions,
    mutations
};
