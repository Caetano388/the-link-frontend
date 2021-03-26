<script>
    import Image from "../BaseComponents/Images/Image.svelte";
    export let content;
</script>

<section id="banner">
    <div class="content">
        <header>
            <h1>{ content.Title }</h1>
            {#if content.Subtitle}
                <p>{ content.Subtitle }</p>
            {/if}
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
    {#if content.Main_Images[0] }
        <Image image={ content.Main_Images[0] } size="small" />
    {/if}
</section>