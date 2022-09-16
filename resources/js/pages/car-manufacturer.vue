<template>
<div class="mt-5">

    <v-card elevation="4">
        <v-card-title>
            Manufacturers
            <v-spacer></v-spacer>
            <div width="50%">
                <v-btn color="primary" @click="openAddDialog">
                    <v-icon left>
                        mdi-plus
                    </v-icon>
                    Add Manufacturers
                </v-btn>
            </div>
        </v-card-title>

        <v-divider></v-divider>

        <manufacturerTableVue 
        v-on:openEditDialog="openEditDialog"
        v-on:openDeleteDialog="openDeleteDialog"
        :key="ComponentKey"
        :loading="loading"
        :manufacturers="$store.getters.get_manufacturers"
        />
       
        
    </v-card>

    <v-dialog v-model="dialog" persistent max-width="400px">
         <manufacturerForm 
         v-on:closeDialog="closeDialog" 
         :action_type="action_type" 
         :manufacturer="selected_manufacturer" 
         v-if="action_type != 'delete'  && dialog"
         />

         <deleteForm 
         v-on:closeDialog="dialog = !dialog" 
         :action_type="action_type" 
         :manufacturer="selected_manufacturer" 
         v-if="action_type == 'delete'  && dialog"
         />
    </v-dialog>

</div>
</template>

<script>

import manufacturerForm from '../components/car-manufacturer/manufacturerForm.vue'
import deleteForm from '../components/car-manufacturer/deleteForm.vue'
import manufacturerTableVue from '../components/car-manufacturer/manufacturerTable.vue'

export default {
    data() {
        return {
            ComponentKey:0,
            dialog: false,
            selected_manufacturer: null,
            action_type:'',
            loading: true
        }
    },
    components: {
        manufacturerForm,
        deleteForm,
        manufacturerTableVue
    },


    mounted() {
        this.$store.dispatch('fetchManufacturers')
        .then(()=>{
                this.loading = false;
            })
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
        openEditDialog(manufacturer) {
            this.dialog = true;
            this.selected_manufacturer = manufacturer;
            this.action_type = 'edit';
  

        },
        openDeleteDialog(manufacturer) {
            this.dialog = true;
            this.selected_manufacturer = manufacturer;
            this.action_type = 'delete';
        },
    
    },
}
</script>
