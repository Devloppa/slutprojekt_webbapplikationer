<template>
    <div class="header-wrapper">
        <div class="nav">
            <div class="home-admin">
                <router-link :to="'/productlist'">
                    <div class="homeButton">
                        <img :src="require('@/assets/img/home.svg')" alt="User Button">
                    </div>
                </router-link>
                <router-link :to="'/adminarea'" v-if="isAdmin">
                    <div class="adminButton">
                        <img :src="require('@/assets/img/admin-pen.svg')" alt="Admin Button">
                    </div>
                </router-link>
            </div>

            <div class="central">
               <h1>{{CurrentLocation}}</h1> 
            </div>
            
            <div class="user-cart">
                <CartButton />
                <div class="login-button" @click="showLogIn">
                    <img :src="require('@/assets/img/person-outline.svg')" alt="User Button" v-if="getCurrentUser == null">
                    <img :src="require('@/assets/img/person-outline-white.svg')" alt="User Button" v-else >
                </div>
            </div>
            <LogIn/>
        </div>
        
    </div>
</template>

<script>
import LogIn from '@/components/LogIn'
import CartButton from '@/components/CartButton'
export default {
    name: 'Header',

    props: {
        CurrentLocation: String
    },
    
    components: {
        LogIn,
        CartButton,
    },

    methods:{
        showLogIn() {
            this.$store.state.showLogIn = !this.$store.state.showLogIn
        }
    },

    computed: {
        isAdmin() {
            if (this.$store.state.currentUser !== null){
                return this.$store.state.currentUser.role === `admin`
            } else {
                return false
            }
        },
        getCurrentUser() {
            return this.$store.state.currentUser
        }

    }
}
</script>

<style scoped lang="scss">
.header-wrapper {
    z-index: 5;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #D8D8D8;
    width: 1000px;
    height: 5rem;
    position: fixed;
    top: 0;
    -webkit-box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.75);

    .nav {
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100%;
        position: relative;

        .home-admin {

            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;

            .homeButton {

                margin-left: 1rem;
                margin-right: 1rem;

                img {
                    width: 3rem;
                    height: 3rem;
                }
            }
            .adminButton {
                img {
                    width: 3rem;
                    height: 3rem;
                }
            }

        }

        .central {
            display: flex;
            h1 {
                font-size: 3rem;
                color: black;
                -webkit-text-fill-color: white;
                -webkit-text-stroke-width: 1px;
                -webkit-text-stroke-color: black;
            }
        }
    
        .user-cart {

            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;

            .login-button {
                cursor: pointer;
                margin-left: 1rem;
                margin-right: 1rem;

                img {
                    width: 3rem;
                    height: 3rem;
                }

                .cart-button {
                    justify-self: flex-end;
                }
            }
        }
    }
}
a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

a:hover {
  color: red;
}

a:active {
  text-decoration: none;
}
img {
        &:hover {
            transform: scale(1.05);
        }
        &:focus {
            transform: scale(0.97);
        }}
</style>