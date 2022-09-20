import { Firestore } from '@google-cloud/firestore';
import config from '$lib/firestore/secrets.server.json';

const firestore = new Firestore({
	projectId: 'sterling-c2e04',
	keyFilename: config
});

export async function fetchCollections() {
	const collectionRef = firestore.collection('collections');
	const snapshot = await collectionRef.get();
	const collections = {};

	snapshot.forEach((document) => {
		collections[document.id] = document.data();
	});

	return collections;
}
