<template>
    <div class="container-fluid">
        <h1>Innovative way of creating Technical Blogs</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum excepturi illo incidunt iste
            molestiae quos recusandae repudiandae rerum sint sunt! Esse perspiciatis porro recusandae
            repellendus!
            Animi dolores, eum quisquam soluta temporibus voluptatum! Architecto culpa delectus dolore, minima omnis
            possimus praesentium tempora tenetur! Ab at cum, distinctio eligendi mollitia natus quidem temporibus
            ullam. Ad aperiam atque aut blanditiis, consectetur deleniti distinctio dolore doloremque ducimus
            eligendi eum excepturi iste iusto molestiae, natus nemo nisi provident quaerat quas quibusdam
            veritatis voluptatem voluptates. Ab, assumenda dicta dolores dolorum, eos molestias nemo nihil
            obcaecati perferendis perspiciatis quod rerum. Accusantium animi eum id quia totam voluptate.</p>
    </div>
</template>

<script>
  export default {
    name: 'home_page',
    props: {
      msg: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .container-fluid {
        padding: 1rem;
        font-family: $nunitoSans;
        color: $secondaryColor;

        h1 {
            max-width: 100%;
        }
    }
</style>
