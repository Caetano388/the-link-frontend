<script>
    import { onMount } from "svelte";

    import Card from "./PreviewCard.svelte";
    export let articles;


    let pagination = false;
    let pageNum;

    let arts_to_go = [];

    let article_pages = [];
    let paged_articles = [];
    onMount(async () => {
        if (articles.size > 10) {
            pagination = true;
            arts_to_go = articles;
            while (arts_to_go.size) {
                if (arts_to_go.size > 10) {
                    paged_articles = arts_to_go.slice(0, 10);
                    article_pages.push(paged_articles);
                    arts_to_go = arts_to_go.slice(10);
                } else {
                    paged_articles = arts_to_go;
                    article_pages.push(paged_articles);
                }
            }
            set_pagination(0);
        } else {
            paged_articles = articles;
        }
    });
    
    function set_pagination(next_page) {
        pageNum = next_page;
        paged_articles = article_pages[pageNum];
    }
</script>

<div class="posts">
    {#each paged_articles as article}
        <Card content={ article } />
    {/each}
    {#if pagination}
        <ul class="pagination">
            <li>
                <a on:click={ () => set_pagination(pageNum - 1) } class="button">Previous</a>
            </li>
            {#each article_pages as p}
                <li>
                    <a on:click={ () => set_pagination(p) }>{ p }</a>
                </li>
            {/each}
            <li>
                <a on:click={ () => set_pagination(pageNum + 1) } class="button">Next</a>
            </li>
        </ul>
    {/if}
</div>