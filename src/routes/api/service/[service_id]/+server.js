import { json } from '@sveltejs/kit';
import { getCollection } from '../../db';

export async function PUT({ request, params }) {
	const _id = params.service_id;
	const data = await request.json();

	try {
		const collection = await getCollection('service');
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
export async function DELETE({ request, params }) {
	const _id = params.service_id;
	const data = await request.json();

	try {
		const collection = await getCollection('service');
		const res = await collection.deleteOne({ _id });

		return json({
			res,
		});
	} catch (e) {
		return json({
			error: e
		});
	}
}
