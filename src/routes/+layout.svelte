<script>
	import { updateData } from "$lib/data";
	import { onMount } from "svelte";



    onMount(async () => {
        await updateData();
    })

</script>

<div class="body">
    <slot/>
</div>

<style>
.body {
    background-color: aliceblue;
    padding: 0;
    margin: 0;
    height: 100%;
}

:global(html, body) {
    min-height: 100vh;
    display: grid;
    padding: 0;
    margin: 0;
}

:global(h1) {
    margin: 0;
}
</style>