<script context="module">
	export async function preload({ params }) {
		const { slug } = params;
		const res = await this.fetch(`articles/${slug}.json`);
		const article = await res.json();

		return { article : article };
	}
</script>

<script>
	export let article;
</script>

<svelte:head>
    <title>{article.Title}</title>
</svelte:head>

<h1>{article.Title}</h1>

<div class="content">
    {@html article.Body}
</div>