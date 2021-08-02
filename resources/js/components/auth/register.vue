<template>
    <div class="col-md-4 float-right">
    
        <form @submit.prevent="register">
            <h3>Sign Up</h3>

            <div class="form-group">
                <label>Full Name</label>
                <input type="text" class="form-control form-control-lg" v-model="form.name"/>
            </div>
            <!-- @error('title')
                <div class="alert alert-danger">{{ $message }}</div>
            @enderror -->
            <div  class="alert alert-danger">{{errors.email}}</div>

            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control form-control-lg" v-model="form.email" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" v-model="form.password"/>
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">Sign Up</button>

            <p class="forgot-password text-right">
                Already registered 
                <router-link :to="{name: 'login'}">sign in?</router-link>
            </p>
        </form>
    </div>
    
</template>

<script>
import {mapActions, mapState} from 'vuex';
    export default {
        computed: {
         ...mapState({errors: state => state.validationErrors}),
        },


        data() {
            return {
                form:{
                    name:'',
                    email:'',
                    password:'',
                },
                errors:[],
            }
        },
        methods:{
            ...mapActions([
                'signUp'
            ]),
            async register(){
                  await this.signUp(this.form);
            }  
        }

    }
</script>