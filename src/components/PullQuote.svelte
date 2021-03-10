<script>
    export let paragraph;
    
    if (paragraph.embedded_tweet) {
        paragraph.Quote = paragraph.Quote.replace(/twitter-tweet/g, 'twitter-tweet tw-align-center');
    }
</script>

<style>
    blockquote {
        margin: 3em 0 0 0;
        padding-top: 1em;
        padding-bottom: 1em;
        font-size: larger;
    }
    .tweet {
        margin: 3em;
    }
    .attribution {
        text-align: right;
        margin: 0 0 3em 0;
        font-style: italic;
        font-size: smaller;
    }
    .attribution::before {
        content: '\2014';
        padding-right: 0.2em;
    }
</style>

{#if !paragraph.embedded_tweet}
<section>
    <blockquote>{ paragraph.Quote }</blockquote>
    <p class="attribution">{ paragraph.Attribution }</p>
</section>
{:else}
<section class="tweet">
    { @html paragraph.Quote }
</section>
{/if}