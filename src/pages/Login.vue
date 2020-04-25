<template>
    <div class="form_container">
        <form action="">
            <h1 class="text-center m-2">Login Form</h1>

            <div class="form-group">
                <label for="email">Email address:</label>
                <input v-model="email" type="email" class="form-control" placeholder="Enter email" id="email">
            </div>

            <div class="form-group">
                <label for="pwd">Password:</label>
                <input v-model="password" type="password" class="form-control" placeholder="Enter password" id="pwd">
            </div>

            <div class="error-container" v-if="errors.length">
                <h3>Please correct the following errors and try again!</h3>
                <ul>
                    <li v-for="(each_error, index) in errors" :key="index">{{ each_error }}</li>
                </ul>
            </div>

            <div class="container text-center">
                <input type="submit" class="btn btn-success" @click.stop.prevent="loginFunction()" value="Login Now" />
            </div>
        </form>
    </div>
</template>

<script>
  import { validations } from '../shared/validations';
  import { ENV } from '../shared/constants';
  import { mapActions } from 'vuex';
  import * as accountTypes from '../store/modules/accounts/AccountTypes';
  export default {
    name: 'login_page',
    props: {
      msg: String
    },
    data() {
      return {
        email: '',
        password: '',
        errors: []
      }
    },
    methods: {
      ...mapActions({
        loginUser: accountTypes.LOGIN_USER
      }),
      loginFunction() {
        this.errors = [];
        if(this.email && !validations.validateEmail(this.email))
        {
          this.errors.push('Email is not in valid format.');
          console.log('Email not valid');
        }
        if(!this.email) {
          this.errors.push('Email field cannot be left blank.');
        }
        if(this.password && this.password.length <= 6 ) {
          this.errors.push('Length of password is too short');
        }
        if(!this.password) {
          this.errors.push('Password field cannot be left blank.');
        }
        let payload = {
          email: this.email,
          password: this.password
        };
        this.loginUser(payload);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import "../assets/scss/form_styles";
</style>
