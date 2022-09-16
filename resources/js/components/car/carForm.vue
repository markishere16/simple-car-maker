<template>
<div>

    <v-card>
        <v-form ref="form" 
        @submit.prevent="validate" 
        v-model="valid" 
        lazy-validation
        >
            <v-card-title>
                <span class="text-h5">
                    {{action_type == 'add' ? 'Add Car' : 'Edit Car'}}
                </span>
            </v-card-title>
            <v-card-text>
                <v-text-field 
                :rules="name_rules" 
                type="text" 
                ref="name" 
                v-model="form_data.name" 
                label="Car Name" 
                placeholder="Ranger, Model X, etc">
                </v-text-field>

                <v-select
                :rules="select_rules" 
                :items="$store.getters.get_car_properties.manufacturers"
                v-model="form_data.manufacturer"
                label="Manufacturer"
                return-object
                item-text="name"
                dense
                ></v-select>

                <v-select
                :rules="select_rules" 
                :items="$store.getters.get_car_properties.types"
                v-model="form_data.type"
                label="Type"
                return-object
                item-text="name"
                dense
                ></v-select>

                <v-select
                :rules="select_rules" 
                :items="$store.getters.get_car_properties.colors"
                v-model="form_data.color"
                label="Color"
                return-object
                item-text="name"
                dense
                ></v-select>


            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="$emit('closeDialog')">
                    Close
                </v-btn>
                <v-btn color="blue darken-1" text type="submit" :loading="isloading" :disabled="!valid || isloading">
                    Save
                </v-btn>
            </v-card-actions>
        </v-form>

    </v-card>

</div>
</template>

<script>
import { debounce } from 'lodash';

export default {
    
    props: ['action_type','car'],
    data() {
        return {
            valid: false,
            isloading: false,
            name_rules: [
                v => !!v || 'required',
            ],
            select_rules: [(v) => !!v || "required"],
            form_data: {
                id: null,
                name: '',
                manufacturer: null,
                color: null,
                type: null,
            },
       
        }
    },
    mounted() {
        if (this.action_type == 'edit') {
            this.form_data.id =  this.car.id;
            this.form_data.name = this.car.name;
            this.form_data.manufacturer = this.car.manufacturer;
            this.form_data.color = this.car.color;
            this.form_data.type = this.car.type;
      
        
        } else {
            this.resetForm();
        }
    },
    methods: {
       
        validate() {
            this.isloading = true;
            if (this.$refs.form.validate()) {
                this.upsertType();
            } else {
                this.isloading = false;
            }
        },
        resetForm() {
            this.form_data =  {
                id: null,
                name: '',
                manufacturer: null,
                color: null,
                type: null,
            };
        },

        upsertType() {
            if(this.action_type == 'add') {
                this.$store.dispatch('insertCar', {
                    vm: this,
                    payload: this.form_data
                }).then(() => {
                        this.isloading = false;
                        this.$emit('closeDialog');
                        
                });
            } else {
                this.form_data.id = this.car.id;
                this.$store.dispatch('updateCar', {
                    vm: this,
                    payload: this.form_data
                }).then(() => {
                        this.isloading = false;
                        this.$emit('closeDialog');
                }).catch(()=>{
                   this.car =  this.form_data;
                });
            }

        },

      

    },

}
</script>
