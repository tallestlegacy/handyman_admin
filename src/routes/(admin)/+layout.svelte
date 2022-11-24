<script>
	import Nav from '$lib/Nav.svelte';
</script>

<main>
	<Nav />
	<section>
		<slot />
	</section>
</main>

<style>
	main {
		display: grid;
		grid-template-columns: auto 1fr;
        gap: 1rem;
        height: 100%;
        max-height: 100vh;
        overflow: hidden;
	}

    section {
        overflow: auto;
        height: 100%;
    }
</style>
