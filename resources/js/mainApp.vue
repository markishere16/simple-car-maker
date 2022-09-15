<template>


    <v-app>

        <topbar />


        <!-- Sizes your content based upon application components -->
        <v-main >

            <!-- Provides the application the proper gutter -->
            <v-container  >

                <!-- If using vue-router -->
                <router-view></router-view>
            </v-container>
        </v-main>


    </v-app>

</template>

<script>

//     const sidebar  = () => import( /* webpackChunkName: "sidebar" */   './layout/navigation.vue');
//    const topbar  = () => import( /* webpackChunkName: "topbar" */   './layout/topbar.vue');
//      const alertMessage  = () => import( /* webpackChunkName: "alertMessage" */  './components/alert-message.vue');
//        const mapGetters  = () => import( /* webpackChunkName: "mapGetters" */   'vuex');

  
    import sidebar from './layout/navigation.vue';
    import topbar from './layout/topbar.vue';
 
    export default {
        mounted() {
            // this.$store.dispatch('fetchCurrentUser')
        },
        components: {
            sidebar,
            topbar
        },
    
       
    }

</script>
