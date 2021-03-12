<script>
    export let size = "large";
    export let image;
    export let pos = '';
    let url = process.env.API_URL || "https://the-link-cms-wnzzi.ondigitalocean.app/";
    url += image.url;
    let imgClass = "image";
    if (size == "large") {
        imgClass += " main";
    } else {
        imgClass += " object";
    }
</script>

<span class="{imgClass} {pos}">
    <img src="{url}" alt="{image.alternativeText}" />
</span>