<template>
    <div class="mt-5">
    
        <v-card elevation="4">
            <v-card-title>
                Car Colors
                <v-spacer></v-spacer>
                <div width="50%">
                    <v-btn color="primary" @click="openAddDialog">
                        <v-icon left>
                            mdi-plus
                        </v-icon>
                        Add Car Color
                    </v-btn>
                </div>
            </v-card-title>
    
            <v-divider></v-divider>

            <!-- Color Table -->
            <colorTable
            v-on:openEditDialog="openEditDialog"
            v-on:openDeleteDialog="openDeleteDialog"
            :key="ComponentKey"
            :car_colors="$store.getters.get_car_colors"
            />
           
            
        </v-card>
    
        <v-dialog v-model="dialog" persistent max-width="400px">
             <colorForm 
             v-on:closeDialog="closeDialog" 
             :action_type="action_type" 
             :car_color="selected_car_color" 
             v-if="action_type != 'delete'  && dialog"
             />
    
             <deleteForm 
             v-on:closeDialog="dialog = !dialog" 
             :action_type="action_type" 
             :car_color="selected_car_color" 
             v-if="action_type == 'delete'  && dialog"
             />
        </v-dialog>
    
    </div>
    </template>
    
    <script>
    
    import colorForm from '../components/car-color/colorForm.vue'
    import deleteForm from '../components/car-color/deleteForm.vue'
    import colorTable from '../components/car-color/colorTable.vue'
    
    export default {
        data() {
            return {
                ComponentKey:0,
                dialog: false,
                selected_car_color: null,
                action_type:'',
            }
        },
        components: {
            colorForm,
            deleteForm,
            colorTable
        },
    
    
        mounted() {
            this.$store.dispatch('fetchCarColors')
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
            openEditDialog(car_color) {
                this.dialog = true;
                this.selected_car_color = car_color;
                this.action_type = 'edit';

    
            },
            openDeleteDialog(car_color) {
                this.dialog = true;
                this.selected_car_color = car_color;
                this.action_type = 'delete';
            },
        
        },
    }
    </script>
    