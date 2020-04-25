<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">AmitPrafull.com</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link to="/register" class="nav-link-custom" href="#">Register</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/login" class="nav-link-custom" href="#">Login</router-link>
                </li>
                <li class="nav-item active">
                    <router-link to="/dashboard" class="nav-link" href="#">Dashboard</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/" class="nav-link" href="#">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/admin" class="nav-link" href="#">About Me</router-link>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>
</template>

<script>
  export default {
    name: 'header_component',
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .navbar-expand-lg {
        padding-top: 1.2rem;
    }

    .nav-link-custom {
        background-color: #FFF;
        color: $secondaryColor;
        border: 1px solid black;
        padding: 0.5rem 1rem;
        margin: 0.5rem;
        font-size: 1.2rem;
        border-radius: 0.3rem;
        font-family: $nunitoSans;
        transition: all 0.5s ease-out;

        &:hover {
            text-decoration: none;
            color: crimson;
        }
    }

</style>
