let articles = []

let error = null
let url =
	process.env.API_URL || "https://the-link-cms-wnzzi.ondigitalocean.app/";

let lookupTable = [];

async function loadArticles() {
	try {
		const res = await axios.get(url + "articles");
		articles = res.data;
		articles.map((article) => {
			article.title = article.Title;
			article.slug = article.Title.toLowerCase().replace(/ /g, '-').replace(/[^\w]+/g, '');
			lookupTable[article.slug] = article.id;
		});
	} catch (e) {
		error = e
	}
};

articles.getArticle = (async (slug) => {
	await loadArticles();
	let id = lookupTable[slug];
	return articles[id];
});

export async function get(req, res, next) {
	const { slug } = req.params;
	const article = await articles.getArticle(slug);
}