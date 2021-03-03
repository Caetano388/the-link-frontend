<script>
    export let image;
    let url = process.env.API_URL || "https://the-link-cms-wnzzi.ondigitalocean.app/";
    url += image.formats.large.url;
    url = url.replace(/\/\//g, '/');

    let style = 'background-image: linear-gradient(hsla(0, 0%, 0%, 0.18), hsla(0, 0%, 0%, 0.2)), url(' + url + ');';
</script>

<style>
    .hero-image {
        height: 100%;
        margin: 0 -6em;
        padding: 0 4em 0 14em;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
    }

    @media screen and (max-width: 1680px) {
        .hero-image {
            margin: 0 -5em;
            padding: 8em;
        }
    }

    @media screen and (max-width: 1280px) {
        .hero-image {
            margin: 0 -4em;
            padding: 0 4em;
        }
    }

    @media screen and (max-width: 736px) {
        .hero-image {
            margin: 0 -2em;
            padding: 0 2em;
        }
    }

</style>

<div class="hero-image" style="{ style }">
    <slot></slot>
</div>