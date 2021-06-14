<script>
    let color="#000000"
	import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher()
    const forward_click = (event) => {
        console.dir(event)
        dispatch('click', event.detail)
    }
</script>


<span class="close-button" style={`color: ${color};`} on:click={forward_click}>
&times;
</span>

<style>
    .close-button {
        position: absolute;
        top: 5px;
        right: 15px;
        color: var(--color);
        font-size: 30px;
        cursor: pointer;
    }
</style>