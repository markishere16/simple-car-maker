<template>
    <div>
        <v-data-table :headers="headers" :items="car_types"  :loading="loading" :items-per-page="10" class="elevation-1">
            <template v-slot:body="{ items }">
                <tbody>
                    <tr v-for="car_type in items" :key="car_type.id">
                    
                        <td class="text-left">
                            {{car_type.name}} </td>

                
                        <td class="text-center">
                            <v-btn class="ma-2" color="green" dark small @click="$emit('openEditDialog',car_type)">
                                <v-icon left>
                                    mdi-pencil
                                </v-icon>
                                Edit
                            </v-btn>

                            <v-btn class="ma-2" color="red" dark small @click="$emit('openDeleteDialog',car_type)">
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
    props:['car_types', 'loading'],
    data() {
        return {
            headers: [

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