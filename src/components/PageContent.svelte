<script>
	import Link_CTA from "./Link_CTA";
	export let page;
	
    let cta = page.Link_CTA;
</script>

{#if cta}
	<Link_CTA params={cta} />
{/if}