<script context="module">
  export async function preload({ params }) {
    const { slug } = params;
    const res = await this.fetch(`articles/${slug}.json`);
    const article = await res.json();
    return { article: article };
  }
</script>

<script>
  import Image from "../../components/BaseComponents/Images/Image.svelte";
  import CarouselComponent from "../../components/ParentComponents/CarouselComponent.svelte";
  import PageContent from "../../components/ParentComponents/PageContent.svelte";

  export let article;
</script>

<style>
  .breadcrumb {
    margin-top: 1.5em;
    vertical-align: middle;
  }
  .breadcrumb > a {
    padding-bottom: 2px;
  }
  .breadcrumb > a::before {
    font-size: large;
    content: '\2329';
    padding-right: 0.5em;
  }
</style>

<svelte:head>
  <title>{article.Title}</title>
</svelte:head>

<h5 class="breadcrumb"><a href="/articles">Articles</a></h5>

<section>
  <header class="main">
    <h1>{article.Title}</h1>
  </header>
  {#if article.Main_Images.size > 1}
    <CarouselComponent images={article.Main_Images} />
  {:else if article.Main_Images[0]}
    <Image image={article.Main_Images[0]} size="medium" pos="right" />
  {/if}
  <div class="content">
    <PageContent page={article} type="article" />
  </div>
</section>
