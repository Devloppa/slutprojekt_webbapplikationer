<template>
    <div class="login-container" v-if="!showLogIn">
        <div class="triangle">
            <svg width="31" height="27" viewBox="0 0 31 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.7915 1.80746C14.5707 0.527088 16.4293 0.527087 17.2085 1.80746L30.5376 23.7103C31.3487 25.0431 30.3893 26.75 28.8291 26.75H2.17085C0.61066 26.75 -0.348731 25.0431 0.462354 23.7103L13.7915 1.80746Z" fill="white"/></svg>
        </div>
        <div class="upper">
            <h3 v-if="!logedIn">Login</h3>
            <div class="close" @click="closeLogin">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
            </div>
        </div>
        <p class="error" v-if="wrongInput">E-mail or password incorect!</p>
        <div class="logInForm" v-if="!logedIn">
            <form @submit.prevent="submit">
                <div class="input-email">
                    <label for="email">E-mail</label>
                    <input id="email" v-model="email" placeholder="E-mail" type="text" name="email" :class="noEmail" />
                </div>
                <div class="input-password">
                    <label for="password">Password</label>
                    <input id="password" v-model="password" placeholder="Password" type="text" name="password" :class="noPassword" />
                </div>
                <div class="buttons">
                    <button type="submit">SIGN IN</button>
                    <p>Don't have an account?</p>
                    <button type="button" @click="register">REGISTER</button>
                </div>
            </form>
        </div>
        <div class="buttonsLoggedIn" v-if="logedIn">
            <div class="logout-button">
                <button type="button" @click="signOut">SIGN OUT</button>
            </div>
            <div class="profile">
                <button type="button" @click="goToProfile">PROFILE</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',

    data() { return {
        email: "admin@example.com",
        password: "password",
        noPasswordInput: false,
        noEmailInput: false,
        wrongInput: false,
        logedIn: false
    }},

    methods: {
        async submit() {
                // resetting warning colors
            this.noEmailInput = false
            this.noPasswordInput = false
            this.wrongInput = false
            let response = null
            if (this.email !== `` && this.password !== ``) { // there are both email and password
                response = await this.$store.dispatch('logInUser', { email : this.email, pass : this.password})
                if (response == 200){
                    this.logedIn = true
                    this.closeLogin()
                }
            } else if (!this.email && this.password) {
                this.noEmailInput = true
            } else if (!this.password && this.email) {
                this.noPasswordInput = true
            } else if (!this.password && !this.email) {
                this.noEmailInput = true
                this.noPasswordInput = true
            }
            if (response != 200) {
                this.wrongInput = true
            }
        },

        closeLogin() {
            this.$store.state.showLogIn = false
            this.email = ""
            this.password = ""
            this.noEmailInput = false
            this.noPasswordInput = false
            this.wrongInput = false
        },

        signOut() {
            sessionStorage.removeItem('sinus-token')
            sessionStorage.removeItem('sinus-user')
            this.logedIn = false
            this.closeLogin()
            this.$store.state.currentUser = null
            this.$store.state.awaitedOrder = []
            this.$router.push('productlist')

        },
        goToProfile() {
            this.closeLogin()
            this.$router.push('myaccount')
        },
        register() {
            this.closeLogin()
            this.$router.push('registration')
        }
    },

    computed: {
        showLogIn() {
            return !this.$store.state.showLogIn
        },
        noPassword() {
            return { red: this.noPasswordInput };
        },
        noEmail() {
            return { red: this.noEmailInput };
        },
    },

    created() {
        if (sessionStorage.getItem('sinus-token') && sessionStorage.getItem('sinus-user')) {
            this.logedIn = true
        }
    }
}
</script>

<style scoped lang="scss">
.noDisplay {
    display: none;
}
button, .close {
    outline: none;
    cursor: pointer;
    &:hover {
        transform: scale(1.05);
    }
    &:active {
        transform: scale(0.96);
    }
}
.login-container {
    z-index: 10;
    -webkit-box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.75);
    position: absolute;
    right: 1rem;
    top: 5rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    background-color: #FFF;
    border: 2px solid lightgrey;
    border-radius: 1rem;

    .triangle{
        position: absolute;
        top: -1rem;
        right: 0.4rem;
    }

    .upper {
        
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;

        h3 {
            font-size: 1.5rem;
            margin-right: 5rem;
            margin-top: 0;
        }
        .close {
            margin-left: auto;
        }
    }
    .error {
        color: red;
        font-size: 0.8rem;
    }
    .logInForm {
        .input-email, .input-password {
            display: grid;
            grid-template-columns: 1fr 2fr;
            text-align: left;
            margin-bottom: 1rem;
            height: 1.6rem;
            input.red {
                background-color: rgba(255, 0, 0, 0.3);
            }
            label {
                display: flex;
                justify-content: flex-start;
                align-items: center;
            }
        }
        .buttons button {
            -webkit-box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.75);
            -moz-box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.75);
            box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.75);
            border: none;
            border-radius: 0.7rem;
            height: 2rem;
            width: 6rem;
            margin-left: 0.5rem;
            margin-right: 0.5rem;
        }
    }

    .buttonsLoggedIn {
        div {
            button {
                -webkit-box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.75);
                -moz-box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.75);
                box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.75);
                border: none;
                border-radius: 0.7rem;
                height: 2rem;
                width: 6rem;
                margin-top: 1rem;
            }
        }
    }
}
</style>