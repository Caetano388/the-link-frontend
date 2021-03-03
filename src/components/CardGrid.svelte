<script>
    import Card from "./PreviewCard.svelte";
    export let articles;
</script>

<style>
    .posts {
        margin-top: 4em;
    }
</style>

<div class="posts">
    {#each articles as article}
        <Card content={ article } />
    {/each}
</div>