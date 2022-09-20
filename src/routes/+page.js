export async function load({ fetch }) {
	const response = await fetch('/api/directory');
	const sections = await response.json();

	return { sections };
}
