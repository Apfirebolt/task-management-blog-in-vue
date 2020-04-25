<template>
    <div class="container-fluid">
        <h1 class="text-danger">Footer Component</h1>
        <div class="row">
            <div class="col-md-4">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, eius fuga laudantium officiis placeat repellat vitae voluptate.
                    Blanditiis fugit laudantium repellendus. Deleniti error optio vero! Accusamus adipisci atque dicta, eius
                    laboriosam optio quae ullam veritatis. Architecto aut est fugiat impedit labore molestias, nihil nisi,
                    optio provident quae quaerat, sunt voluptatum.
                </p>
            </div>
            <div class="col-md-8">
                <form action="#">
                    <div class="form-group">
                        <label for="email">Enter Your Email</label>
                        <input type="email" class="form-control" />
                    </div>

                    <div class="form-group">
                        <label for="query">Enter Your Query</label>
                        <textarea name="query" id="query" cols="30" rows="10" class="form-control"></textarea>
                    </div>

                    <button class="btn-success btn">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'footer_component',
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.container-fluid {
    background-color: slategray;
    padding: 1rem;
}

</style>
