import editorials from "./_editorials"

const lookup = new Map();

let error = null;

try {
	editorials.forEach((editorial) => {
    	lookup.set(editorial.slug, JSON.stringify(editorial))
	});
} catch (e) {
	error = e
}

export async function get(req, res, next) {
	if (lookup.size <= 0) {
		let eds = await editorials();
		eds.forEach((editorial) => {
			editorial.slug = editorial.Title.toLowerCase().replace(/ /g, '-').replace(/[^\w]+/g, '');
			lookup.set(editorial.slug, JSON.stringify(editorial))
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