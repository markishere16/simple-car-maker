import axios from 'axios'
const state = {
    todos: [],
    remaining_task: 0,

};
const getters = {
    get_todos: (state) => {

        state.todos.forEach(item => {
            item.toggleEdit = false;
        });
        return state.todos;
    },
    get_remaining_task: (state) => {

        let counter = 0;
        state.todos.forEach(item => {
            if (item.completed == false) {
                counter++;
            }
        });
        return counter;
    },
};

const actions = {
    fetchTodos({
        commit
    }) {
        axios.get('api/items/all')
            .then((res) => {
                commit('SET_TODOS', res.data);
            })
            .catch(error => {
                console.log(error);
            })
    },

    insertItem({
        commit
    }, todoForm) {
        axios.post('/api/items/store', todoForm)
            .then((res => {
                commit('NEW_ITEM', res.data);
                
            }))
            .catch(error => {
                console.log(error);
            })
    },

    updateItem({
        commit
    }, todoForm) {
        axios.put('/api/items/update', {
                item: todoForm
            })
            .then((res => {
                if (todoForm.action == 'edit') {
                    commit('UPDATE_ITEM', res.data);
                }
            }))
            .catch(error => {
                console.log(error);
            })
    },

    removeItem({
        commit
    }, todo_id) {
        axios.delete('api/items/delete/' + todo_id)
            .then(res => {
                if (res.status == 200) {
                    commit('DELETE_ITEM', todo_id);
                }
            })
            .catch(error => {
                console.log(error);
            })
    },

    updateCheckItem({
        commit
    }, item) {
        axios.put('/api/items/check', {
                item: item
            })
            .then(response => {
                if (response.status == 200) {
                    commit('CHECK_ITEM', item);
                }
            })
            .catch(error => {
                console.log(error);
            })
    },

    clearCompletedTask({commit}) {
        axios.delete('/api/items/clearCompleted')
        .then(response => {
            if (response.status == 200) {
                commit('CLEAR_COMPLETED_TASK');
            }
        })
        .catch(error => {
            console.log(error);
        })
     
    }

  



};
const mutations = {
    SET_TODOS: (state, todos) => (state.todos = todos),
    NEW_ITEM: (state, todos) => (state.todos.unshift(todos)),

    UPDATE_ITEM: (state, todos) => {
        var index = state.todos.findIndex(function (item, i) {
            return item.id === todos.id;
        });
        state.todos[index] = todos;
    },

    CHECK_ITEM: (state, todos) => {
        var index = state.todos.findIndex(function (item, i) {
            return item.id == todos.id;
        });
        state.todos[index].completed = todos.completed;

    },
    DELETE_ITEM: (state, todo_id) => {
        state.todos = state.todos.filter(item => item.id !== todo_id);
    },
    CLEAR_COMPLETED_TASK: (state) => {
        state.todos = state.todos.filter(item => item.completed == false);
    }
   



};

export default {
    state,
    getters,
    actions,
    mutations
};
