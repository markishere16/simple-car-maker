<template>
    <div>
        <v-data-table :headers="headers" :items="car_colors"  :items-per-page="10" class="elevation-1">
            <template v-slot:body="{ items }">
                <tbody>
                    <tr v-for="car_color in items" :key="car_color.id">
                        <td class="text-left">{{car_color.id}} </td>
                        <td class="text-left">
                            {{car_color.name}} </td>
                
                        <td class="text-center">
                            <v-btn class="ma-2" color="green" dark small @click="$emit('openEditDialog',car_color)">
                                <v-icon left>
                                    mdi-pencil
                                </v-icon>
                                Edit
                            </v-btn>

                            <v-btn class="ma-2" color="red" dark small @click="$emit('openDeleteDialog',car_color)">
                                <v-icon left>
                                    mdi-delete
                                </v-icon>
                                Delete
                            </v-btn>
                        </td>
                    </tr>
                    <tr v-if="items.length == 0">
                        <td class="text-center" colspan="100">
                            No data available
                        </td>
                    </tr>
                </tbody>
            </template>
        </v-data-table>

    </div>
</template>

<script>
export default {
    props:['car_colors'],
    data() {
        return {
            headers: [

                {
                    text: 'ID',
                    value: 'Color ID',
                    align: 'start',
                },
                {
                    text: 'Name',
                    value: 'name',
                    align: 'start',
                },
              
                {
                    text: 'Actions',
                    value: 'status',
                    align: 'center',

                },

            ],
        }
    },
   
}
</script>