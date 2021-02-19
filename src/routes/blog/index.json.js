import articles from './_posts.js';

const contents = JSON.stringify(articles.map(article => {
	return {
		title: article.title,
		slug: article.slug
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}