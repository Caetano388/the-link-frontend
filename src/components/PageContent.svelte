<script>
	import Markdown from "./Markdown.svelte";
	export let page;

	let components = Object.keys(page);
</script>

{#if page.author}
	<h4>by { page.author.username }</h4>
{/if}

{#if page.Location}
	<strong class="location">{page.Location} - </strong>
{/if}

{#each components as component}
	{#if component == "Body" || component == "Site_Info"}
		<Markdown markdown={page[component]} />
	{:else if component == "Additional_Paragraphs"}
		{#each page[component] as paragraph}
			<Markdown markdown={paragraph} />
		{/each}
	{/if}
{/each}