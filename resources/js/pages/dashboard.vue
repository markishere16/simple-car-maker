<template>
    <div>
        <v-row class="pt-4">
            <v-col v-for="(item, index) in cardheaders" :key="index" cols="12" lg="3" md="6" sm="12" xs="12">
                <v-card>
                    <v-card-title class="pb-0 py-1 cardTitle">{{item.title}}</v-card-title>

                    <v-card-text class="pb-0">
                        <v-row align="center">
                            <v-col class="text-h3 primary--text" cols="6">
                                {{item.count}}
                            </v-col>
                            <v-col cols="6" class="text-right">
                                <v-icon class="text-h2" style="font-size:2 rem">{{item.icon}}</v-icon>
                            </v-col>
                        </v-row>
                    </v-card-text>

                </v-card>
            </v-col>

        </v-row>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                cardheaders: [{
                        title: "Total Cars",
                        icon: 'mdi-car',
                        count: 0,
                
                    },
                    {
                        title: "Total Manufacturers",
                        icon: 'mdi-watermark',
                        count: 0,
                  
                    },
                    {
                        title: "Total Car Types",
                        icon: 'mdi-car-settings',
                        count: 0,
                     
                    },
                    {
                        title: "Total Car Colors",
                        icon: 'mdi-palette',
                        count: 0,
                       
                    },

                ],
            }
        },
        mounted() {
            this. getoverview();
        },
        methods: {
            getoverview() {
                //this.isGetting = true;
                axios.get(`/api/car/overview`)
                    .then((res) => {
                        this.cardheaders[0].count = res.data.total_cars;
                        this.cardheaders[1].count = res.data.total_manufacturers;
                        this.cardheaders[2].count = res.data.total_types;
                        this.cardheaders[3].count = res.data.total_colors;

                    })
            },


        },
    }

</script>
