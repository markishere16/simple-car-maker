<template>


    <v-list-item @click="updateItemCheck">
     
        <v-list-item-action>
            <v-checkbox v-model="item.completed" readonly></v-checkbox>
        </v-list-item-action>

        <v-list-item-content >
            <v-list-item-title v-if="!toggleEdit " :class="item.completed ? 'completed' : ''">{{item.name}}
            </v-list-item-title>
            <v-list-item-subtitle v-if="!toggleEdit " >{{format_date(item.created_at)}}
            </v-list-item-subtitle>

            <v-text-field v-if="toggleEdit" @blur="updateItem" outlined desnsed v-model="item.name"  @click.stop
                @click:append="updateItem" append-icon="mdi-content-save" hide-details></v-text-field>
          
        </v-list-item-content>
        <v-list-item-action>
            <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon color="primary" dark v-bind="attrs" v-on="on">
                        <v-icon color="grey lighten-1">mdi-dots-vertical</v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item>
                        <v-list-item-title>
                            <v-btn plain @click="toggleEdit = !toggleEdit">
                                <v-icon left color="grey lighten-1">mdi-pencil</v-icon> Edit
                            </v-btn>
                        </v-list-item-title>

                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title>

                            <v-btn plain @click="removeItem">
                                <v-icon left color="grey lighten-1">mdi-delete</v-icon>Delete
                            </v-btn>
                        </v-list-item-title>
                        

                    </v-list-item>

                </v-list>
            </v-menu>

        </v-list-item-action>
  
    </v-list-item>

</template>


<script>
    import moment from 'moment'
     export default {
        props: ['item'],
        data: function () {
            return {
                toggleEdit: false,
            }
        },
        methods: {
            format_date(date){
                return  moment(date).format('MM/DD/YYYY h:mm a');
            },
            updateItem() {
                this.$store.dispatch('updateItem', this.item);
                this.toggleEdit = !this.toggleEdit;
            },

            updateItemCheck() {
                this.item.completed = !this.item.completed;
                this.$store.dispatch('updateCheckItem', this.item);
            },
            removeItem() {
                this.$store.dispatch('removeItem', this.item.id)
            },
        }
    }

</script>

<style scoped>
    .completed {
        text-decoration: line-through;
        color: #999;

    }

    .itemText {
        width: 100%;
        margin-left: 20px;
    }

    .item {
        border-bottom: 1px solid #999;
        padding-top: 10px;
        padding-bottom: 10px;
        display: flex;
        align-items: center;

    }

</style>
