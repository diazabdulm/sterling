<script>
	import { now } from "svelte/internal";

	export let data;
	const { sections } = data;
</script>

<div class="directory">
	{#each sections as section (section.id)}
		<a class="menu-item" href={section.linkURL} class:large={section.title.match(/womens|mens/)}>
			<div class="background" style="background-image: url({section.imageURL})" />
			<div class="content">
				<span class="title">{section.title}</span>
				<span class="subtitle">Buy Now</span>
			</div>
		</a>
	{/each}
</div>

<style>
	.directory {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.menu-item {
		min-width: 30%;
		height: 240px;
		flex: 1 1 auto;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 1px solid rgb(182, 169, 150);
		margin: 0 7.5px 15px;
		overflow: hidden;
	}

	.menu-item.large {
		height: 380px;
	}

	.menu-item:hover {
		cursor: pointer;
	}

	.menu-item .background {
		width: 100%;
		height: 100%;
	}

	.menu-item .background {
		background-position: center;
		background-size: cover;
		transform: scale(1);
		transition: transform 0.8s ease;
	}

	.menu-item:hover .background {
		transform: scale(1.05);
	}

	.menu-item .title {
		font-size: 22px;
		font-weight: bold;
		margin-bottom: 6px;
		color: #4a4a4a;
		text-transform: uppercase;
	}

	.menu-item .subtitle {
		font-size: 15px;
		font-weight: bold;
	}

	.menu-item .content {
		height: 90px;
		padding: 0 25px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border: 1px solid #000;
		background: rgba(255, 255, 255, 0.7);
		position: absolute;
	}

	.menu-item:hover .content {
		opacity: 0.9;
	}

	@media screen and (max-width: 800px) {
		.directory {
			flex-flow: column;
		}

		.menu-item {
			height: 200px;
		}
	}
</style>
