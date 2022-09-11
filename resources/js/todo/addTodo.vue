<template>
     <v-form @submit.prevent="addItem()">
        <v-text-field 
            placeholder="Throw trash can, Review, Check Email, etc" 
            label="Task" 
            outlined 
            clearable
            v-model="todoForm.name"
            @click:append="addItem()"
            append-icon="mdi-plus"
            hide-details
            
            ></v-text-field>
     </v-form>
</template>


<script>
export default {
    data: function () {
            return {
                items: [],
                errorMessage: '',
                todoForm: {
                    name: ""
                },
                edit: false
            }
        },
    methods: {
       
        addItem() {
                if (this.todoForm.name == '') {
                    this.errorMessage = 'This field is required';
                    return
                }
                this.$store.dispatch('insertItem', this.todoForm)
                this.todoForm.name = '';
              
            },
    },
}
</script>
