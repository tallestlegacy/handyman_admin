<script>
	import { updateData } from '$lib/data';
	import { services } from '$lib/store';

	let newService = {
		imageSrc: '',
		name: ''
	};

	async function addService() {
		await fetch('/api/service', {
			method: 'POST',
			body: JSON.stringify(newService)
		}).then((res) => {
			updateData();
			newService = {
				imageSrc: '',
				name: ''
			};
		});
	}
</script>

<main>
	<h1>Services</h1>

	<div class="services">
		{#each [...$services] as service}
			<div class="service">
				<img src={service.imageSrc} alt="" />
				<span class="name">{service.name}</span>
				<span class="imgSrc">{service.imageSrc}</span>
			</div>
		{/each}
		<div>
			<div class="service">
				<input type="text" placeholder="Service name" id="" bind:value={newService.name} />
				<input type="text" placeholder="Image Url" id="" bind:value={newService.imageSrc} />
				<img src={newService.imageSrc} alt="" />
				<button on:click={addService}>Add</button>
			</div>
		</div>
	</div>
</main>

<style>
	main {
		padding: 2rem;
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}
	.services {
		display: flex;
		flex-wrap: wrap;
		max-width: 1000px;
		margin: 0 auto;
		gap: 1rem;
	}
	.service {
		width: 300px;
		display: grid;
		gap: 0.5rem;
		background-color: white;
		padding: 0.5rem;
		box-shadow: 0 2px 16px -4px #0003;
	}

	img {
		width: 100%;
		aspect-ratio: 1;
		object-fit: cover;
	}

	.name {
		font-weight: bold;
	}
	.imgSrc {
		font-size: 12px;
	}
</style>
