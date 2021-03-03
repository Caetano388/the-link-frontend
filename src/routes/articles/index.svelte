<script context="module">
	import CardGrid from "../../components/CardGrid.svelte";

	export async function preload({ params }) {
		const res = await this.fetch(`articles.json`);
		const articles = await res.json();

		return { articles : articles };
	}
</script>

<script>
	export let articles;
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

<section>
	<h1>Recent articles</h1>

	<CardGrid articles={ articles } />
</section>