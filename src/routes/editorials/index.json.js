let editorials = []

let error = null
let url =
	process.env.API_URL || "https://the-link-cms-wnzzi.ondigitalocean.app/";

let lookupTable = [];

async function loadEditorials() {
	try {
		const res = await axios.get(url + "editorials");
		editorials = res.data;
		editorials.map((editorial) => {
			editorial.title = editorial.Title;
			editorial.slug = editorial.Title.toLowerCase().replace(/ /g, '-').replace(/[^\w]+/g, '');
			lookupTable[editorial.slug] = editorial.id;
		});
	} catch (e) {
		error = e
	}
};

editorials.getEditorial = (async (slug) => {
	await loadEditorials();
	let id = lookupTable[slug];
	return editorials[id];
});

export async function get(req, res, next) {
	const { slug } = req.params;
	const editorial = await editorials.getEditorial(slug);
}