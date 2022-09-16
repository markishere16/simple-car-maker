<template>
   
         <v-list nav dense>
                <v-list-item-group  active-class="deep-primary--text text--accent-4">
                    
                    <v-list-item exact link :to="{name: 'dashboard'}" >
                        <v-list-item-icon>
                            <v-icon>mdi-view-dashboard</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Dashboard</v-list-item-title>
                    </v-list-item>
                    
                    <v-list-item exact link :to="{name: 'cars'}" >
                        <v-list-item-icon>
                            <v-icon>mdi-car</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Cars</v-list-item-title>
                    </v-list-item>

                    <v-list-item exact link :to="{name: 'car_manufacturer'}" >
                        <v-list-item-icon>
                            <v-icon>mdi-watermark</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Car Manufacturers</v-list-item-title>
                    </v-list-item>

                    <v-list-item exact link :to="{name: 'car_color'}" >
                        <v-list-item-icon>
                            <v-icon>mdi-palette</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Car Colors</v-list-item-title>
                    </v-list-item>

                    <v-list-item exact link :to="{name: 'car_type'}" >
                        <v-list-item-icon>
                            <v-icon>mdi-car-settings</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Car Types</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
    
</template>


<script>
  import {
        mapGetters
    } from "vuex";

export default {
      computed: {
            ...mapGetters(['get_CurrentUser']),
        },
}
</script>