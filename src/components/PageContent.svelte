<script>
	import Markdown from "./Markdown.svelte";
	export let page;

	let components = Object.keys(page);
</script>

{#each components as component}
	{#if component == "Body" || component == "Site_Info"}
		<Markdown markdown={page[component]} />
	{:else if component == "Additional_Paragraphs"}
		{#each page[component] as paragraph}
			<Markdown markdown={paragraph} />
		{/each}
	{/if}
{/each}