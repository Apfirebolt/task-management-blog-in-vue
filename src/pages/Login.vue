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

            <div class="container text-center">
                <input type="submit" class="btn btn-success" @click.stop.prevent="registerFun()" value="Login Now" />
            </div>
        </form>
    </div>
</template>

<script>
  export default {
    name: 'login_page',
    props: {
      msg: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import "../assets/scss/form_styles";
</style>
