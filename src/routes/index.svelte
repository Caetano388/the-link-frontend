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
		return { page: page };
	};
</script>

<script>
	export let page;
</script>

<svelte:head>
	<title>The Link</title>
</svelte:head>

<Page page={ page } />