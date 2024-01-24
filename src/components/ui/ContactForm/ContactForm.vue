<template>
<transition name="fade">
    <form v-if="!postResponse" class="contact-form" @submit.prevent="submitMessage">
        <input class="interact-cursor" @keypress="preventInputInvalid($event)" @focus="cleanError" :class="{ error: !!name.err }" v-model.trim="name.val" name="name" type="text" :placeholder="globalObject.contactNamePlaceholder" />
        <label v-if="!!name.err" for="name">{{ name.err }}</label>
        <input class="interact-cursor" @focus="cleanError" :class="{ error: !!email.err }" v-model.trim="email.val" name="email" :placeholder="globalObject.contactEmailPlaceholder" />
        <label v-if="!!email.err" for="email">{{ email.err }}</label>
        <textarea class="interact-cursor" @focus="cleanError" :class="{ error: !!message.err }" v-model.trim="message.val" rows="6" :placeholder="globalObject.contactMessagePlaceholder" name="message"></textarea>
        <label v-if="!!message.err" for="message">{{ message.err }}</label>
        <main-button type="submit" color="black">{{
        globalObject.contactButton
      }}</main-button>
    </form>
    <div v-else class="response-container">
        <h1>{{ postResponse }}</h1>
    </div>
</transition>
</template>

<script>
export default {
    watch: {
        userIsTyping(newValue, _) {
            if (newValue) {
                window.onbeforeunload = function (e) {
                    return e;
                };
            } else {
                window.onbeforeunload = null;
            }
        }
    },
    data() {
        return {
            formIsValid: false,
            postResponse: null,
            name: {
                val: '',
                err: '',
            },
            email: {
                val: '',
                err: '',
            },
            message: {
                val: '',
                err: '',
            },
        };
    },
    methods: {
        async submitMessage() {
            this.checkValidity();
            if (this.formIsValid) {
                const newMessage = {
                    name: this.name.val,
                    email: this.email.val,
                    message: this.message.val,
                };
                this.postResponse = await this.$store.dispatch(
                    'postMessage',
                    newMessage
                );
                this.name.val = '';
                this.email.val = '';
                this.message.val = '';
            }
        },
        checkValidity() {
            let isValid = true;
            if (!this.name.val) {
                this.name.err = 'Name is required';
                isValid = false;
            } else {
                this.name.err = '';
            }
            if (!this.email.val) {
                this.email.err = 'Email is required';
                isValid = false;
            } else if (
                !this.email.val.includes('@') ||
                !this.email.val.includes('.')
            ) {
                this.email.err = 'Email is invalid';
                isValid = false;
            } else {
                this.email.err = '';
            }
            if (!this.message.val) {
                this.message.err = 'Message is required';
                isValid = false;
            } else {
                this.message.err = '';
            }
            this.formIsValid = isValid;
        },
        cleanError(e) {
            this.$data[e.target.name].err = '';
        },

        preventInputInvalid(e) {
            var regex = /^[a-zA-Z ]*$/;
            const inputIsValide = regex.test(e.key);
            if (!inputIsValide) {
                e.preventDefault();
            }
        },
    },
    computed: {
        globalObject() {
            return this.$store.getters.getlanguageObject;
        },
        userIsTyping() {
            return (this.name.val.length > 10 || this.email.val.length > 10 || this.message.val.length > 10);
        },
    },
};
</script>

<style lang="scss" scoped>
@import 'ContactForm.scss';
</style>
