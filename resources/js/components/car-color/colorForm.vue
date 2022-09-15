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
                    {{action_type == 'add' ? 'Add Color' : 'Edit Color'}}
                </span>
            </v-card-title>
            <v-card-text>

                <v-text-field 
                :rules="name_rules" 
                type="text" 
                ref="name" 
                v-model="form_data.name" 
                label="Color" 
                placeholder="Red, Blue, White, etc">
                </v-text-field>

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
export default {
    props: ['action_type','car_color'],
    data() {
        return {
            valid: false,
            isloading: false,
            name_rules: [
                v => !!v || 'Color Name is required',
            ],
            form_data: {
                id: null,
                name: '',
            }
        }
    },
    mounted() {
        if (this.action_type == 'edit') {
            this.form_data.name = this.car_color.name;
        } else {
            this.resetForm();
        }
    },
    methods: {
        validate() {
            this.isloading = true;
            if (this.$refs.form.validate()) {
                this.upsertColor();
            } else {
                this.isloading = false;
            }
        },
        resetForm() {
            this.form_data.name = '';
        },

        upsertColor() {
            
        
            if(this.action_type == 'add') {
                this.$store.dispatch('insertCarColor', {
                    vm: this,
                    payload: this.form_data
                }).then(() => {
                        this.isloading = false;
                        this.resetForm();
                        this.$emit('closeDialog');
                });
            } else {
                this.form_data.id = this.car_color.id;
                this.$store.dispatch('updateCarColor', {
                    vm: this,
                    payload: this.form_data
                }).then(() => {
                        this.isloading = false;
                        this.$emit('closeDialog');
                }).catch(()=>{
                   this.car_color =  this.form_data;
                });
            }

        },

      

    },

}
</script>
