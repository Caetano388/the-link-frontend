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
    <p>
        {content.Summary}
    </p>
    <ul class="actions">
        <li>
            <a href="{content.slug}" class="button">More</a>
        </li>
    </ul>
</article>