
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
                                    <v-text-field :rules="username_rules" type="email" v-model="form_data.email"
                                        prepend-inner-icon="mdi-account" label="Email"></v-text-field>
                                    <v-text-field :rules="password_rules" v-model="form_data.password"
                                        prepend-inner-icon="mdi-lock" :append-icon="show ?'mdi-eye':'mdi-eye-off'"
                                        @click:append="show = !show" :type="!show ? 'password' : 'text'"
                                        label="Password"></v-text-field>
                                    <v-btn :loading="isloading" :disabled="!valid || isloading" block rounded
                                        class="mb-3 mt-2 pt-5 pb-5" type="submit" color="primary">Login</v-btn>

                                    <router-link :to="{name: 'sign_up'}"> Sign Up Here</router-link>
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
                tmpMessage: '',
                form_data: {
                    email: '',
                    password: ''
                },
                isloading: false,
                valid: true,
                username_rules: [
                    v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
                ],
                password_rules: [
                    v => !!v || 'Password is required',
                ],
                show: false,
            }
        },
        computed: {
            ...mapGetters([
                'IsAuthenticated_data',
            ]),
        },

        methods: {
            validate() {
                this.isloading = true;
                if (this.$refs.form.validate()) {
                    this.login();
                } else {
                    this.isloading = false;
                }
            },
            async login() {

                axios.get('/sanctum/csrf-cookie').then(() => {
                    axios.post('/api/auth/login', this.form_data).then((res) => {
                        this.tmpMessage = res.data;
                        if (res.data.success) {
                            // this.IsAuthenticated_data = true;
                            this.$router.push({
                                path: "/"
                            });

                        } else {
                            this.toastError('Incorrect Email Or Password, Please Try Again');
                            this.isloading = false;
                        }
                    }).catch(err => {
                        this.toastError('Something went wrong!');
                        this.isloading = false;
                    })
                })


            },


            fetchSubscription() {
                axios.get('/api/user_subscriber').then((res) => {
                    this.tmpMessage = res.data;
                })
            }
        },

    }

</script>
