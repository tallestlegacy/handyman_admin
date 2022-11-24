<script>
	import { updateData } from '$lib/data';
	import { handymen, services } from '$lib/store';

	import MultiSelect from 'svelte-multiselect';

	let newHandyMan = {
		name: '',
		location: '',
		phoneNumber: '',
		services: []
	};



	$: options = $services.map((service) => service.name);

	async function addHandyman() {
		await fetch('/api/handyman', {
			method: 'POST',
			body: JSON.stringify(newHandyMan)
		}).then((res) => {
			updateData();
			newHandyMan = {
				name: '',
				location: '',
				phoneNumber: '',
				services: []
			};
		});
	}

    async function deleteHandyMan(_id) {
        await fetch(`/api/handyman/${_id}`, {
            method:"DELETE",
        }).then(res => updateData())
    }
</script>

<main>
	<h1>HandyMen</h1>

	<div class="handymen">
		{#each $handymen as handyman}
			<div class="handyman">
				<span>{handyman._id}</span>
				<span>{handyman.name}</span>
				<span>{handyman.phoneNumber}</span>
				<span>{handyman.location}</span>
				<span>{handyman.services}</span>
			</div>
		{/each}
		<div class="handyman">
			<input type="text" placeholder="Full name" id="" bind:value={newHandyMan.name} />
			<input type="text" placeholder="Location" id="" bind:value={newHandyMan.location} />
			<input type="tel" placeholder="Phone" id="" bind:value={newHandyMan.phoneNumber} />
			<MultiSelect {options} bind:value={newHandyMan.services} />
			<button on:click={addHandyman}>Add</button>
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
	.handymen {
		display: grid;
		width: 600px;
		margin: 0 auto;
		gap: 1rem;
	}
	.handyman {
		display: grid;
		gap: 0.5rem;
		background-color: white;
		padding: 0.5rem;
		box-shadow: 0 2px 16px -4px #0003;
	}

	.services {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
</style>
