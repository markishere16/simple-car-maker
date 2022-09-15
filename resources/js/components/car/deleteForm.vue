<template>
    <div>

        <v-card>
            <v-form ref="form"   lazy-validation>
                <v-card-title>
                    <span class="text-h5">Delete</span>
                </v-card-title>
                <v-card-text>
                    Are you sure you want to delete <b>{{car.name}}</b>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="$emit('closeDialog')">
                        Cancel
                    </v-btn>
                    <v-btn color="blue darken-1" text  :loading="isloading"
                        :disabled="isloading" @click="deleteCar">
                        Yes
                    </v-btn>
                </v-card-actions>
            </v-form>
        </v-card>

    </div>
</template>

<script>
    export default {
        props: ['action_type', 'car'],
        data() {
            return {
                isloading: false,
            }
        },
      
        methods: {

            deleteCar() {
                this.$store.dispatch('deleteCar', {vm: this, payload: this.car})
                .then(() => {
                    this.isloading = false;
                    this.$emit('closeDialog');
                });


            },



        },

    }

</script>
