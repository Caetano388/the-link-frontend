<script>
    export let size = "large";
    export let image;
    let url = process.env.API_URL || "https://the-link-cms-wnzzi.ondigitalocean.app/";
    url += image.formats[size].url;
    url = url.replace(/\/\//g, '/');
</script>

<img src="{url}" alt="{image.alternativeText}" />