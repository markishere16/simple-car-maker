<template>
    <div>
        <v-data-table :headers="headers" :items="cars" :loading="loading" :items-per-page="10" class="elevation-1">
            <template v-slot:body="{ items }">
                <tbody>
                    <tr v-for="car in items" :key="car.id">
                      
                        <td class="text-left">
                            {{car.name}} 
                        </td>
                        <td class="text-left">
                            {{car.manufacturer.name}} 
                        </td>
                        <td class="text-left">
                            {{car.type.name}} 
                        </td>
                        <td class="text-left">
                            {{car.color.name}} 
                        </td>
                        <td class="text-center">
                            <v-btn class="ma-2" color="green" dark small @click="$emit('openEditDialog',car)">
                                <v-icon left>
                                    mdi-pencil
                                </v-icon>
                                Edit
                            </v-btn>

                            <v-btn class="ma-2" color="red" dark small @click="$emit('openDeleteDialog',car)">
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
    props:['cars','loading'],
    data() {
        return {
            headers: [

                {
                    text: 'Name',
                    value: 'name',
                    align: 'start',
                },
                {
                    text: 'Manufacturer',
                    value: 'manufacturer',
                    align: 'start',
                },
             
                {
                    text: 'Type',
                    value: 'type',
                    align: 'start',
                },

                {
                    text: 'Color',
                    value: 'color',
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