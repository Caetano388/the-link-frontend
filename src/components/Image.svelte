<script>
    export let size = "large";
    export let image;
    let url = process.env.API_URL || "https://the-link-cms-wnzzi.ondigitalocean.app/";
    url += image.formats[size].url;
    url = url.replace(/\/\//g, '/');
    let imgClass = "image";
    if (size == "large") {
        imgClass += " main";
    } else {
        imgClass += " object";
    }
</script>

<span class="{imgClass}">
    <img src="{url}" alt="{image.alternativeText}" />
</span>