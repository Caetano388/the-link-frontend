<script context="module">
	import CardGrid from "../../components/ParentComponents/CardGrid.svelte";

	export async function preload({ params }) {
		const res = await this.fetch(`articles.json`);
		const articles = await res.json();

		return { articles : articles };
	}
</script>

<script>
	import FeaturedArticle from "../../components/ParentComponents/FeaturedArticle.svelte";
	export let articles;

	let featured_article = articles[1];
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>

<svelte:head>
	<title>Articles</title>
</svelte:head>

<FeaturedArticle content={ featured_article } />

<section>
	<header class="major">
		<h2>Recent articles</h2>
	</header>

	<CardGrid { articles } />
</section>