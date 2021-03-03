<script>
    import Nav from "./Nav";
    import PageContent from "./PageContent";
    import HeroImage from "./Hero_Image.svelte";
	import Link_CTA from "./Link_CTA";

    export let page;
    let hero_images = page.Hero_Images;
    let cta = page.Link_CTA;
</script>

<div id="wrapper">
	<div id="main">
		<div class="inner {hero_images ? 'inner_with_hero' : ''}">
            {#if hero_images}
                {#each hero_images as image}
                    <HeroImage image={ image }>
                        <header id="header">
                            <a href="/" class="logo">
                                <strong>The Link</strong>
                            </a>
                            <Link_CTA params={ cta }/>
                        </header>
                    </HeroImage>
                {/each}
            {:else}
                <header id="header">
                    <a href="/" class="logo">
                        <strong>The Link</strong>
                    </a>
                </header>
            {/if}
            <PageContent page={ page } />
        </div>
	</div>
	<Nav />
</div>