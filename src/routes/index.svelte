<script context="module">
	import axios from "axios";
	import Page from "../components/Page.svelte";

	let url =
		process.env.API_URL || "https://the-link-cms-wnzzi.ondigitalocean.app/";

	export async function preload({ params }) {
		const res = await axios.get(url + "front-page");
		let page = res.data;
		let keys = Object.keys(page);
		page.text_components = keys.map((key) => {
			if (key == 'Site_Info' || key == 'Body' || key == 'Additional_Paragraphs') {
				if (!(page[key] == ''|| typeof page[key] == 'undefined')) {
					return page[key];
				}
			}
		});

		const articlesRes = await this.fetch(`articles.json`);
		let articles = await articlesRes.json();

		const taxonomiesRes = await this.fetch(`taxonomies.json`);
		let taxonomies = await taxonomiesRes.json();

		return { page: page, articles: articles, taxonomies: taxonomies };
	};
</script>

<script>
	import ArticlesDashboard from "../components/TopLevelComponents/ArticlesDashboard.svelte";

	export let page;
	export let articles;
	export let taxonomies;
</script>

<svelte:head>
	<title>The Link</title>
</svelte:head>

<Page { page }>
	<ArticlesDashboard { articles } { taxonomies } />
</Page>