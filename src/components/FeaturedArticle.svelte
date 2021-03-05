<script>
    import Image from "./Image.svelte";
    export let content;
</script>

<section id="banner">
    <div class="content">
        <header>
            <h1>{ content.Title }</h1>
        </header>
        {#if content.Summary}
            <p>{ content.Summary }</p>
        {/if}
        <ul class="actions">
            <li>
                <a href="{content.slug}" class="button big">More</a>
            </li>
        </ul>
    </div>
    {#if content.Main_Images }
        <Image image={ content.Main_Images[0] } size="small" />
    {/if}
</section>