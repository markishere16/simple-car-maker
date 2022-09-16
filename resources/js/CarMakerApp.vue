<template>


    <v-app>

        <topbar />

        <v-main >

            <v-container>

                <router-view></router-view>
            </v-container>


        </v-main>


    </v-app>

</template>

<script>

  
    import sidebar from './layout/navigation.vue';
    import topbar from './layout/topbar.vue';
 
    export default {
        components: {
            sidebar,
            topbar
        },
    
       
    }

</script>
