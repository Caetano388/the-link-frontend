<script>
    import Card from "./PreviewCard.svelte";
    export let articles;
</script>

<div class="posts">
    {#each articles as article}
        <Card content={ article } />
    {/each}
</div>