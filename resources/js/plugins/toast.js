import Vue from 'vue';
import titleMixin from './mixins/titleMixin';
import Toasted from 'vue-toasted';
Vue.use(Toasted);
Vue.mixin({
    ...titleMixin,
    methods: {
        toastNormal(message) {
            return this.$toasted.show(message, {
                theme: "toasted-primary",
                position: "top-right",
                icon: "warning",
                duration: 7000,
            });
        },

        toastSuccess(message) {
            return this.$toasted.success(message, {
                theme: "toasted-primary",
                position: "top-center",
                icon: "check",
                duration: 7000
            });
        },

        toastLoading(message) {
            return this.$toasted.show(message, {
                theme: "toasted-primary",
                position: "top-center",
                icon: "hourglass_empty",
                duration: 7000
            });
        },

        toastError(message) {
            return this.$toasted.error(message, {
                theme: "toasted-primary",
                position: "top-right",
                icon: "warning",
                duration: 7000
            });
        },
        toastInfo(message) {
            return this.$toasted.show(message, {
                theme: "toasted-primary",
                position: "top-center",
                icon: "info",
                duration: 7000
            });
        },
    }
})