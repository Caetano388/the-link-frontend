<script context="module">
	export async function preload({ params }) {
		const { slug } = params;
		const res = await this.fetch(`editorials/${slug}.json`);
		const editorial = await res.json();

		return { editorial : editorial };
	}
</script>

<script>
	export let editorial;
</script>

<svelte:head>
    <title>{editorial.Title}</title>
</svelte:head>

<h1>{editorial.Title}</h1>

<div class="content">
    {@html editorial.Body}
</div>