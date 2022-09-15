<template>
    <div>

        <v-card>
            <v-form ref="form"   lazy-validation>
                <v-card-title>
                    <span class="text-h5">Delete</span>
                </v-card-title>
                <v-card-text>
                    Are you sure you want to delete <b>{{manufacturer.name}}</b>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="$emit('closeDialog')">
                        Cancel
                    </v-btn>
                    <v-btn color="blue darken-1" text  :loading="isloading"
                        :disabled="isloading" @click="deleteManufacturer">
                        Yes
                    </v-btn>
                </v-card-actions>
            </v-form>
        </v-card>

    </div>
</template>

<script>
    export default {
        props: ['action_type', 'manufacturer'],
        data() {
            return {
                isloading: false,
            }
        },
      
        methods: {

            deleteManufacturer() {
                this.$store.dispatch('deleteManufacturer', {vm: this, payload: this.manufacturer})
                .then(() => {
                    this.isloading = false;
                    this.$emit('closeDialog');
                });


            },



        },

    }

</script>
