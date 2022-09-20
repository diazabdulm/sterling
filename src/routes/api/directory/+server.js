import { json } from '@sveltejs/kit';

export function GET() {
	const sections = [
		{ id: 1, title: 'hats', imageURL: '/hats.png', linkURL: '/shop/hats' },
		{ id: 2, title: 'jackets', imageURL: '/jackets.png', linkURL: '/shop/jackets' },
		{ id: 3, title: 'sneakers', imageURL: '/sneakers.png', linkURL: '/shop/sneakers' },
		{ id: 4, title: 'womens', imageURL: '/womens.png', linkURL: '/shop/womens' },
		{ id: 5, title: 'mens', imageURL: '/mens.png', linkURL: '/shop/mens' }
	];

	return json(sections);
}
