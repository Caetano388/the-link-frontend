import taxonomies from "./_taxonomies";

export async function get(req, res, next) {
    let taxons = await taxonomies();

    const contents = JSON.stringify(taxons);

    res.writeHead(200, {
        'Content-Type': 'application/json',
    });

    res.end(contents);
}