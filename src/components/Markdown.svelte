<script>
    import MarkdownIt from "markdown-it";

    export let header;
    export let markdown;

    markdown = markdown.replace(/\# /g, '## ');

    const md = new MarkdownIt();
    const rendered = md.render(markdown);
</script>

{#if rendered}
    <section>
        {#if header}
            <h2>{ header }</h2>
        {/if}
        {@html rendered}
    </section>
{/if}