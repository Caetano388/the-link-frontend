<script context="module">
	import axios from "axios";
	import Page from "../components/Page.svelte";

	let url =
		process.env.API_URL || "https://the-link-cms-wnzzi.ondigitalocean.app/";

	export async function preload({ params }) {
		const res = await axios.get(url + "front-page");
		let page = res.data;
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