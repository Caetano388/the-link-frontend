<script>
  import Nav from "./BaseComponents/Nav.svelte";
  import PageContent from "./ParentComponents/PageContent.svelte";
  import HeroImage from "./BaseComponents/Images/Hero_Image.svelte";
  import Link_CTA from "./BaseComponents/Text/Link_CTA.svelte";
  import { compute_slots } from "svelte/internal";
  
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
          <span>Visit our About Us page to read our Mission Statement</span>
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
      <slot></slot>
      <PageContent { page } />
      <slot name="postcontent"></slot>
    </div>
  </div>
  <Nav />
</div>