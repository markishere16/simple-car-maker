<style>
    .nostyle {
        list-style-type: none;
        font-weight: bolder;
    }

    #tooltbar>div {
        padding: 0px !important;
    }

</style>
<template>
    <div>
        <v-app-bar id="tooltbar" app color="primary" :clipped-left="$vuetify.breakpoint.lgAndUp" dark>
            <!-- <v-app-bar :clipped-left="$vuetify.breakpoint.mdAndUp" app color="primary" dark> -->
            <v-toolbar color="blue darken-3" class="pl-0" style="padding:0px !important">
                <v-toolbar-title class="ml-0 pl-0 d-flex align-center">
                    RemotePro.PH | Car Maker Website
                </v-toolbar-title>
      
                <v-spacer></v-spacer>
            
                <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">

                        <v-btn icon large v-bind="attrs" v-on="on">
                            <v-icon>mdi-account</v-icon>
                        </v-btn>
                    </template>
                    <v-list class="pa-0">

                        <v-list-item link tile @click="logout">
                            <v-list-item-title dense>
                                <v-icon>mdi-logout</v-icon> Log out
                            </v-list-item-title>
                        </v-list-item>

                    </v-list>
                </v-menu>

            </v-toolbar>
        </v-app-bar>



        <v-navigation-drawer dark :mini-variant.sync="drawer" expand-on-hover permanent 
            :clipped="$vuetify.breakpoint.lgAndUp" app>

            <!-- Navigations -->
            <navigation />
        
        </v-navigation-drawer>
    </div>
</template>



<script>
    import navigation from './navigation.vue'

    import {
        mapGetters
    } from "vuex";
    export default {
        components: {
            navigation
        },
        data: () => ({
            drawer: true
        }),

        async mounted() {
            
            // await this.$store.dispatch('fetchSubscription')

        },
        methods: {
            logout() {
                axios.post('/api/auth/logout')
                    .then(() => {
                        location.reload();
                        this.$router.push({
                            path: "/login"
                        })
                    })
                    .catch((e) => {})
            },
        },
    }

</script>
