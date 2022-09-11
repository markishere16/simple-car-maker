<template>
    <div>

        <!-- Add From-->
        <addTodoForm />
        <!--End Add From-->


        <!-- Todo List Items-->
        <v-list class="py-0">
            <todoList v-for="item in get_todos" :key="item.id" :item="item" />
        </v-list>
        <!-- end Todo List Items-->

        <v-card elevation="1" class="text-center pb-5" v-if="get_todos.length == 0">
            <div>
                <v-icon style="font-size:200px">mdi-list-box</v-icon>
            </div>

            <div class="text-h5">You have no pending task</div>
            <div class="text-p">When you have, you'll see them here</div>
            
        </v-card>


        <v-divider></v-divider>


        <!--Todo Footer-->
        <div class="d-flex justify-space-between align-center px-3 py-3" v-if="get_todos.length != 0" >
            <div>
                You have <b>{{get_remaining_task}}</b> task remaining
            </div>
            <div>
                <v-btn text @click="$store.dispatch('clearCompletedTask')"
                    :disabled="get_todos.length == get_remaining_task">
                    Clear Completed Task
                </v-btn>
            </div>
        </div>
        <!--Todo Footer-->


    </div>
</template>


<script>
    import todoList from './todoList.vue'
    import addTodoForm from './addTodo.vue'
    import {
        mapGetters
    } from "vuex";
    export default {
        props: ['item'],
        data: function () {
            return {
                settings: null,
                errorMessage: '',
                taskLeft: 0,
                edit: false,
                toggleId: null,
               
            }
        },
        components: {
            todoList,
            addTodoForm,
        },
        computed: {
            ...mapGetters(['get_todos', 'get_remaining_task']),
        },
        mounted() {
            this.$store.dispatch('fetchTodos');
        },

    }

</script>
