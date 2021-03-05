<script context="module">
  export async function preload({ params }) {
    const { slug } = params;
    const res = await this.fetch(`articles/${slug}.json`);
    const article = await res.json();
    return { article: article };
  }
</script>

<script>
  import Image from "../../components/Image.svelte";
  import PageContent from "../../components/PageContent.svelte";

  export let article;
</script>

<svelte:head>
  <title>{article.Title}</title>
</svelte:head>

<section>
  <header class="main">
    <h1>{article.Title}</h1>
  </header>
  {#if article.Main_Images[0]}
    <Image image={article.Main_Images[0]} size="large" />
  {/if}
  <div class="content">
    <PageContent page={article} type="article" />
  </div>
</section>
