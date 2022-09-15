<template>
    <div class="mt-5">
    
        <v-card elevation="4">
            <v-card-title>
                Cars
                <v-spacer></v-spacer>
                <div width="50%">
                    <v-btn color="primary" @click="openAddDialog">
                        <v-icon left>
                            mdi-plus
                        </v-icon>
                        Add Cars
                    </v-btn>
                </div>
            </v-card-title>
    
            <v-divider></v-divider>
    
            <carTableVue 
            v-on:openEditDialog="openEditDialog"
            v-on:openDeleteDialog="openDeleteDialog"
            :key="ComponentKey"
            :cars="$store.getters.get_cars"
            />
           
            
        </v-card>
    
        <v-dialog v-model="dialog" persistent max-width="400px">
             <carForm 
             v-on:closeDialog="closeDialog" 
             :action_type="action_type" 
             :car="selected_car" 
             :key="ComponentKey"
             v-if="action_type != 'delete' && dialog"
             />
    
             <deleteForm 
             v-on:closeDialog="dialog = !dialog" 
             :action_type="action_type" 
             :car="selected_car" 
             :key="ComponentKey"
             v-if="action_type == 'delete'  && dialog"
             />
        </v-dialog>
    
    </div>
    </template>
    
    <script>
    
    import carForm from '../components/car/carForm.vue'
    import deleteForm from '../components/car/deleteForm.vue'
    import carTableVue from '../components/car/carTable.vue'
    
    export default {
        data() {
            return {
                ComponentKey:0,
                dialog: false,
                selected_car: null,
                action_type:'',
                properties: [],
            }
        },
        components: {
            carForm,
            deleteForm,
            carTableVue
        },
    
    
        mounted() {
            this.$store.dispatch('fetchCars');
            this.$store.dispatch('fetchCarProperties');
        },
        methods: {
           
            closeDialog() {
                this.dialog=!this.dialog;
            },
            openAddDialog() {
                this.dialog = true;
                this.action_type = 'add';
    
            },
            openEditDialog(car) {
                this.dialog = true;
                this.selected_car = car;
                this.action_type = 'edit';
            },
            openDeleteDialog(car) {
                this.dialog = true;
                this.selected_car = car;
                this.action_type = 'delete';
            },
        
        },
    }
    </script>
    