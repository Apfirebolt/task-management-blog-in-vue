<template>
    <div class="form_container">
        <form action="">
            <h1 class="text-center m-2">Registration Form</h1>
            <div class="para_container">
                <p>Please note that email and password are the only required fields, rest of the
                    fields can be skipped for now and changed later!</p>
            </div>
            <div class="form-group">
                <label for="email">Email address:</label>
                <input v-model="email" type="email" class="form-control" placeholder="Enter email" id="email">
            </div>

            <div class="form-group">
                <label for="username">Enter Your Username:</label>
                <input v-model="username" type="text" class="form-control" placeholder="Enter username" id="username">
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
                <input type="submit" class="btn btn-success" @click.stop.prevent="registerFunction()" value="Register Now" />
            </div>
        </form>
    </div>
</template>

<script>
  import { validations } from '../shared/validations';
  import { mapActions } from 'vuex';
  import * as accountTypes from '../store/modules/accounts/AccountTypes';
  import { ENV } from '../shared/constants';

  export default {
    name: 'register_page',
    props: {
      msg: String
    },
    data() {
      return {
        email: '',
        password: '',
        username: '',
        errors: []
      }
    },
    methods: {
      ...mapActions({
        registerUser: accountTypes.REGISTER_USER
      }),
      registerFunction() {
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
        // Save the data if no validation error
        let payload = {
          email: this.email,
          password: this.password,
          username: this.username
        };
        this.registerUser(payload);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import "../assets/scss/form_styles";

</style>
