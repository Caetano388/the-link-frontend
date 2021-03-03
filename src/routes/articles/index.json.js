import articles from "./_articles";

export async function get(req, res, next) {
	let arts = await articles();

	const contents = JSON.stringify(arts.map((article) => {
		article.slug = 'articles/' + article.Title.toLowerCase().replace(/ /g, '-').replace(/[^\w]+/g, '');

		return article;
	}));

	res.writeHead(200, {
		'Content-Type': 'application/json',
	});
	
	res.end(contents);
}