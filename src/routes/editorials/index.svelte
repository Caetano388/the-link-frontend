<script>
	import axios from "axios";
	import { onMount } from "svelte";

	/* export function preload() {
		return this.fetch(`articles.json`).then(r => r.json()).then(articles => {
			return { articles };
		});
	} */
	
	let editorials = []

	let error = null
	let url =
		process.env.API_URL || "https://the-link-cms-wnzzi.ondigitalocean.app/";

	onMount(async () => {
		try {
			const res = await axios.get(url + "articles");
   			editorials = res.data;
			editorials = editorials.map((editorial) => {
				return {
					title: editorial.Title,
					slug: editorial.Title.toLowerCase().replace(/ /g, '-').replace(/[^\w]+/g, '')
				};
			});
		} catch (e) {
			error = e
		}
	});

</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>

<svelte:head>
	<title>Editorials</title>
</svelte:head>

<h1>Recent editorials</h1>

<ul>
	{#each editorials as editorial}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li><a rel="prefetch" href="editorials/{editorial.slug}">{editorial.title}</a></li>
	{/each}
</ul>
