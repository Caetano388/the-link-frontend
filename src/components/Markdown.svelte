<script>
    import MarkdownIt from "markdown-it";

    export let markdown;

    markdown = markdown.replace(/\# /g, '## ');

    const md = new MarkdownIt();
    const rendered = md.render(markdown)
</script>

{#if rendered}
    <section>
        {@html rendered}
    </section>
{/if}