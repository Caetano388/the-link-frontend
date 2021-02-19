import articles from './_articles'

const lookup = new Map();
articles.forEach(article => {
    lookup.set(article.slug, JSON.stringify(article));
});

export function get(req, res, next) {
    const { slug } = req.params;

    if (lookup.has(slug)) {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
    } else {
        res.writeHead(404, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify({
            message: 'Not found'
        }));
    }
}