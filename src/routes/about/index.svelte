<script context="module">
	import axios from "axios";
	import PageContent from "../../components/ParentComponents/PageContent.svelte";

	let url =
		process.env.API_URL || "https://the-link-cms-wnzzi.ondigitalocean.app/";

	export async function preload({ params }) {
		const res = await axios.get(url + "about-us");
		let page = res.data;
		page.Additional_Paragraphs = page.Page_Body.map(section => {
			return {
				...section,
				__component: "text-inserts.addl-body-paragraphs",
			};
		});

		return { page: page };
	};
</script>

<script>
	export let page;
</script>

<svelte:head>
	<title>About Us</title>
</svelte:head>

<section>
	<header class="main">
		<h1>About Us</h1>
	</header>
</section>

<PageContent { page } />