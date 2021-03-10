<script>
    import Image from "./Image.svelte";

    export let content;
</script>

<article>
    <a href="{content.slug}" class="image">
        {#if content.image}
            <Image image={content.image} />
        {/if}
    </a>
    <h3>{content.Title}</h3>
    {#if content.Subtitle}
        <p>
            {content.Subtitle}
        </p>
    {:else}
        <p>
            {content.Summary}
        </p>
    {/if}
    <ul class="actions">
        <li>
            <a href="{content.slug}" class="button">More</a>
        </li>
    </ul>
</article>