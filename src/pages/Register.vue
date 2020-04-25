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

            <div class="container text-center">
                <input type="submit" class="btn btn-success" @click.stop.prevent="registerFun()" value="Register Now" />
            </div>
        </form>
    </div>
</template>

<script>
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
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import "../assets/scss/form_styles";

</style>
