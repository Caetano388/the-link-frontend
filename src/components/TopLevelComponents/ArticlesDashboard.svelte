<script>
    import CardGrid from "../ParentComponents/CardGrid.svelte";
    import Column from "../ParentComponents/Column.svelte";

    export let articles;
    export let taxonomies;

    function getFilteredArticles(taxonomy) {
        let filtered = articles.filter(article => {
            let inclTerms = article.taxonomies.map(t => {
                return t.id;
            });

            if (inclTerms.indexOf(taxonomy.id) >= 0) {
                return article;
            }
        });

        return filtered;
    }

    function groupedTaxons() {
        let gT = [];
        for (let i = 0; (taxonomies.length - i) >= 2; i += 2) {
            gT.push(taxonomies.slice(i, 2));
            if ((taxonomies.length - i) == 1) {
                gT.push(taxonomies.slice(i + 2, 1));
            }
        }
        
        return gT;
    }

    let groupedTaxonomies = groupedTaxons();
</script>

<section>
    <header class="major">
        <h2>Recent articles</h2>
    </header>
    <CardGrid { articles } />
</section>

{#each groupedTaxonomies as taxonomies}
    <section>
    <div class="row">
        {#each taxonomies as taxonomy}
            <Column columnsNum={2}>
                <section>
                    <header class="major">
                        <h3>{taxonomy.Name}</h3>
                    </header>
                    <CardGrid articles={ getFilteredArticles(taxonomy) } />
                </section>
            </Column>
        {/each}
    </div>
    </section>
{/each}