import articles from "./_articles"

const lookup = new Map();

let error = null;

try {
	articles.forEach((article) => {
    	lookup.set(article.slug, JSON.stringify(article))
	});
} catch (e) {
	error = e
}

export async function get(req, res, next) {
	if (lookup.size <= 0) {
		let arts = await articles();
		arts.forEach((article) => {
			article.slug = article.Title.toLowerCase().replace(/ /g, '-').replace(/[^\w]+/g, '');
			lookup.set(article.slug, JSON.stringify(article));
		});
	}

	const { slug } = req.params;
    if (lookup.has(slug)) {
        res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		res.end(lookup.get(slug));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Not found`
		}));
	}
}