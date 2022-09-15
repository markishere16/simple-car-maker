<template>
    <div>
        <v-data-table :headers="headers" :items="manufacturers"  :items-per-page="10" class="elevation-1">
            <template v-slot:body="{ items }">
                <tbody>
                    <tr v-for="manufacturer in items" :key="manufacturer.id">
                        <td class="text-left">{{manufacturer.id}} </td>
                        <td class="text-left">
                            {{manufacturer.name}} </td>
                        <td class="text-center">
                            <v-btn class="ma-2" color="green" dark small @click="$emit('openEditDialog',manufacturer)">
                                <v-icon left>
                                    mdi-pencil
                                </v-icon>
                                Edit
                            </v-btn>

                            <v-btn class="ma-2" color="red" dark small @click="$emit('openDeleteDialog',manufacturer)">
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
    props:['manufacturers'],
    data() {
        return {
            headers: [

                {
                    text: 'ID',
                    value: 'Manufacturer ID',
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