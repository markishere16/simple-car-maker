<template>
    <div class="mt-5">
    
        <v-card elevation="4">
            <v-card-title>
                Car Types
                <v-spacer></v-spacer>
                <div width="50%">
                    <v-btn color="primary" @click="openAddDialog">
                        <v-icon left>
                            mdi-plus
                        </v-icon>
                        Add Car Type
                    </v-btn>
                </div>
            </v-card-title>
    
            <v-divider></v-divider>

            <!-- Types Table -->
            <typeTable
            v-on:openEditDialog="openEditDialog"
            v-on:openDeleteDialog="openDeleteDialog"
            :key="ComponentKey"
            :car_types="$store.getters.get_car_types"
            />
           
            
        </v-card>
    
        <v-dialog v-model="dialog" persistent max-width="400px">
             <typeForm 
             v-on:closeDialog="closeDialog" 
             :action_type="action_type" 
             :car_type="selected_car_type" 
             v-if="action_type != 'delete'  && dialog"
             />
    
             <deleteForm 
             v-on:closeDialog="dialog = !dialog" 
             :action_type="action_type" 
             :car_type="selected_car_type" 
             v-if="action_type == 'delete'  && dialog"
             />
        </v-dialog>
    
    </div>
    </template>
    
    <script>
    
    import typeForm from '../components/car-type/typeForm.vue'
    import deleteForm from '../components/car-type/deleteForm.vue'
    import typeTable from '../components/car-type/typeTable.vue'
    
    export default {
        data() {
            return {
                ComponentKey:0,
                dialog: false,
                selected_car_type: null,
                action_type:'',
            }
        },
        components: {
            typeForm,
            deleteForm,
            typeTable
        },
    
    
        mounted() {
            this.$store.dispatch('fetchCarTypes')
        },
        methods: {
            closeDialog() {
                this.dialog=!this.dialog;
                this.ComponentKey++;
            },
            openAddDialog() {
                this.dialog = true;
                this.action_type = 'add';
    
            },
            openEditDialog(car_type) {
                this.dialog = true;
                this.selected_car_type = car_type;
                this.action_type = 'edit';
             
    
            },
            openDeleteDialog(car_type) {
                this.dialog = true;
                this.selected_car_type = car_type;
                this.action_type = 'delete';
            },
        
        },
    }
    </script>
    