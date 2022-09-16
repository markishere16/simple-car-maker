import axios from 'axios'
const state = {
    cars: [],
    car_properties: [],

};
const getters = {
    get_cars: (state) => state.cars,
    get_car_properties: (state) => state.car_properties,

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

    async fetchCars({
        commit
    }) {
        await axios.get('/api/car/all')
            .then((res) => {
                commit('SET_CARS', res.data);
            })
            .catch(error => {
                console.log(error);
            })
    },

    async insertCar({
        commit
    }, {vm, payload}) {

        await axios.post('/api/car/insert', payload)
            .then((res => {
                commit('NEW_CAR', res.data.data);
                actions.toastSuccess(vm,res.data.message);
            }))
            .catch(error => {
                actions.toastError(vm,error.response.data.message);
            })

    },

    async updateCar({
        commit
    }, {vm, payload}) {

        await axios.put('/api/car/update', payload)
            .then((res => {
                commit('UPDATE_CAR', res.data.data);
                actions.toastSuccess(vm,res.data.message);
            }))
            .catch(error => {
                actions.toastError(vm,error.response.data.message);
            })
    },


    async deleteCar({
        commit
     }, {vm, payload}) {
      await  axios.delete('api/car/delete/' +payload.id)
            .then(res => {
                commit('DELETE_CAR', payload.id);
                actions.toastSuccess(vm,res.data.message);
            })
            .catch(error => {
                actions.toastError(vm,error.response.data.message);
               
            })
    },

    async fetchCarProperties({commit }) {
        await axios.get('api/car/car-properties')
        .then(res=>{
            commit('SET_CAR_PROPERTIES', res.data);
        })
    },




};
const mutations = {
    SET_CARS: (state, car) => (state.cars = car),
    SET_CAR_PROPERTIES: (state, car_properties) => (state.car_properties = car_properties),

    NEW_CAR: (state, car) => (state.cars.push(car)),

    UPDATE_CAR: (state, car) => {
        var index = state.cars.findIndex(function (item, i) {
            return item.id == car.id;
        });
        
        state.cars[index] = car;
    },

    DELETE_CAR: (state, car_id) => {
        state.cars = state.cars.filter(item => item.id !== car_id);
    },

};

export default {
    state,
    getters,
    actions,
    mutations
};
