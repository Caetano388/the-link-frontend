<script>
    export let size = "large";
    export let image;
    export let pos = '';
    let url = process.env.API_URL || "https://the-link-cms-wnzzi.ondigitalocean.app/";
    url += image.url;
    url = url.replace(/app\//g, 'app');
    let imgClass = "image";
    if (size == "large") {
        imgClass += " main";
    } else {
        imgClass += " object";
    }
</script>

<style>
    .object {
        padding-left: 1em;
    }
</style>

<span class="{imgClass} {pos}">
    <img src="{url}" alt="{image.alternativeText}" />
</span>