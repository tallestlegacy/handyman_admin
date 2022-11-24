import { json } from '@sveltejs/kit';
import { getCollection } from '../../db';


// Update handyman
export async function PUT({ request, params }) {
	const _id = params.id;
	const data = await request.json();

	try {
		const collection = await getCollection('handyman');
		const res = await collection.updateOne({ _id }, data);

		return json({
			res,
			data
		});
	} catch (e) {
		return json({
			error: e
		});
	}
}

// dDelete handyman
export async function DELETE({ params }) {
	const _id = params.id;
	console.log(_id)

	try {
		const collection = await getCollection('handyman');
		const res = await collection.deleteOne({ _id });

		console.log(res)
		return json({
			res,
		});
	} catch (e) {
		return json({
			error: e
		});
	}
}
