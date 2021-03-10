<script>
	import blockquote from "markdown-it/lib/rules_block/blockquote";
import paragraph from "markdown-it/lib/rules_block/paragraph";
import Markdown from "./Markdown.svelte";
import PullQuote from "./PullQuote.svelte";
	export let page;

	let components = Object.keys(page);
</script>

<style>
	.byline {
		margin: 0 0 2em 0;
	}
	.lead-paragraph {
		font-weight: bolder;
	}
	.location {
		text-transform: uppercase;
	}
	.location::after {
		content: '\2014';
		padding: 0 0.2em;
	}
</style>

{#if page.author}
	<h4 class="byline">by { page.author.username }</h4>
{/if}
{#if page.Location}
	<p class="lead-paragraph"><strong class="location">{page.Location}</strong>{page.Summary}</p>
{/if}

{#each components as component}
	{#if component == "Body" || component == "Site_Info"}
		<Markdown markdown={ page[component] } />
	{:else if component == "Additional_Paragraphs"}
		{#each page[component] as paragraph}
			{#if paragraph.__component == "text-inserts.addl-body-paragraphs"}
				<Markdown header={ paragraph.Section_Header } markdown={ paragraph.Section_Body } />
			{:else if paragraph.__component == "text-inserts.pull-quote"}
				<PullQuote paragraph={ paragraph } />
			{/if}
		{/each}
	{/if}
{/each}