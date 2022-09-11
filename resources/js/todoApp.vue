<template>
    <v-app id="inspire">

        <appBarVue />

        <v-main style="width:1000px; margin: auto;" class="my-4">
        
            <v-card elavation="5" tile class="mt-5">
                <Todo />
            </v-card>
        </v-main>
    </v-app>
</template>

<script>
    import appBarVue from './layout/appBar.vue';
  
    import Todo from './todo/Todo.vue';
    export default {
        components: {
            appBarVue,
            Todo
        }
    }

</script>



