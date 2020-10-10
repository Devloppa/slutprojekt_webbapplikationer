<template>
    <div id="secure">
        <h1>Secure Area</h1>
        <p>
            Login succesful!
        </p>
        <button type="button" v-on:click="logout()">Logout</button>
    </div>
</template>

<script>
    export default {
        name: 'Secure',
        data() {
            return {};
        },
        methods: {
            logout() {
                this.$router.replace({ name: "login" });
                console.log("Logged out");
            }
        }
    }
</script>

<style scoped>
    #secure {
        background-color: #FFFFFF;
        border: 1px solid #CCCCCC;
        padding: 20px;
        margin-top: 10px;
    }
</style>