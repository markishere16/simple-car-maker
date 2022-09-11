
<template>


    <v-app>
        <v-container fluid fill-height>
            <v-row justify="center">
                <v-col class="mainComponent d-flex align-center" cols="12">
                    <v-row justify="center">
                        <v-col class="text-center" cols="12" lg="3" md="4">
                            <v-card elevation="6" class="pa-8">
                            
                                <v-divider class="my-4"></v-divider>
                                <v-form ref="form" @submit.prevent="validate" v-model="valid" lazy-validation>
                                    <v-text-field :rules="name_rules" type="text" v-model="form_data.name"
                                     label="Name"></v-text-field>
                                    <v-text-field :rules="email_rules" type="email" v-model="form_data.email"
                                     label="Email"></v-text-field>
                                    <v-text-field :rules="password_rules" v-model="form_data.password"
                                       :append-icon="show ?'mdi-eye':'mdi-eye-off'"
                                        @click:append="show = !show" :type="!show ? 'password' : 'text'"
                                        label="Password"></v-text-field>
                                    <v-btn :loading="isloading" :disabled="!valid || isloading" block rounded
                                        class="mb-3 mt-2 pt-5 pb-5" type="submit" color="primary">Create Account</v-btn>

                                    <router-link :to="{name: 'login'}"> Login</router-link>
                                </v-form>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
    import {
        mapGetters
    } from 'vuex'

    export default {
        data() {
            return {
                form_data: {
                    name: '',
                    email: '',
                    password: ''
                },
                isloading: false,
                valid: true,
                name_rules: [
                    v => !!v || 'Name is required',
                ],
                email_rules: [
                    v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
                ],
                password_rules: [
                    v => !!v || 'Password is required',
                ],
                show: false,
            }
        },
        computed: {
            // mix the getters into computed with object spread operator
            ...mapGetters([
                'IsAuthenticated_data',
            ]),
        },
        methods: {
            validate() {
                this.isloading = true;
                if (this.$refs.form.validate()) {
                    this.createAccount();
                } else {
                    this.isloading = false;
                }
            },
             createAccount() {

                axios.get('/sanctum/csrf-cookie').then(() => {
                    axios.post('/api/auth/register', this.form_data).then((res) => {
                        if (res.data.success == true) {
                            this.IsAuthenticated_data = true;
                            this.toastSuccess(res.data.message);
                            this.$router.push({
                                path: "/"
                            });
                            this.isloading = false;
                        } else {
                            this.toastError(res.data.message);
                            this.isloading = false;
                        }
                    }).catch(err => {
                        this.toastError('Something went wrong!');
                        this.isloading = false;
                    })
                })


            },


        },

    }

</script>
