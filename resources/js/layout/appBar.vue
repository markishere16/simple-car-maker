<template>
    <div>

        <v-app-bar color="primary" dark shrink-on-scroll src="https://picsum.photos/1920/1080?random">
            <template v-slot:img="{ props }">
                <v-img v-bind="props" gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"></v-img>
            </template>
            <v-spacer></v-spacer>
            <v-app-bar-title class="text-center">
                <h2 class="py-0 my-0"> Hello, {{$store.state.auth.CurrentUser.name}}</h2>
                {{dateToday()}}
            </v-app-bar-title>
            <v-spacer></v-spacer>

            <div style="position:absolute;right:0;bottom:0" class="mr-2">
                <v-btn x-small text elevation="5" @click="logout">
                    Logout
                </v-btn>

            </div>
        </v-app-bar>

    </div>
</template>


<script>
    export default {
        methods: {
            dateToday() {
                var today = new Date();
                var options = {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                };
                return today.toLocaleDateString("en-US", options);
            },

            logout() {
                axios.post('/api/auth/logout')
                    .then(() => {
                        location.reload();
                        this.$router.push({
                            path: "/login"
                        })
                    })
                    .catch((e) => {
                        console.log(e)
                    })
            },
        },
    }

</script>

<style>
    .v-app-bar-title__content,
    .v-app-bar-title__placeholder {
        text-overflow: clip;
    }

</style>
