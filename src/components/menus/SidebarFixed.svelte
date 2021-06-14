
<script>
    export var width_pct = 20
    import { fly } from 'svelte/transition';
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher()
    let sidebar_visible = true
    const forward_click = (event) => {
        console.dir(event)
        dispatch('click', event.detail)
        sidebar_visible = false
    }
    const restore_sidebar = () => {
        console.log("RESTORE")
        sidebar_visible = true
    }

    $: actual_width_pct = sidebar_visible ? width_pct : 5
</script>

{#if sidebar_visible}
    <div 
        class="sidebar" 
        style="--margin-width-pct: {actual_width_pct}%" 
        transition:fly="{{ x: -100, duration: 500 }}" >
        <slot name="sidebar"></slot>
        <span class="close-button" on:click={forward_click}>
        &times;
        </span>
    </div>
{:else}
    <div 
        class="sidebar-hidden" 
        style="width: 50px" 
        transition:fly="{{ x: 200, duration: 500 }}"
        on:click={restore_sidebar}>
        <span class="close-button">
            &gt;
        </span>
    </div>
{/if}

<div class="main" style="--margin-width-pct: {actual_width_pct}%">
    <slot name="main"></slot>
</div>

<div>
    <slot>
        <center>&hellip;</center>
    </slot>
</div>


<style>

    .sidebar-hidden {
        height: 2rem; /* Full-height: remove this if you want "auto" height */
        width: 2rem; /* Set the width of the sidebar */
        position: fixed; /* Fixed Sidebar (stay in place on scroll) */
        z-index: 1; /* Stay on top */
        top: 10px; /* Stay at the top */
        left: 10px;
        background-color: #9aa; /* Black */
        overflow-x: hidden; /* Disable horizontal scroll */
    }

    .sidebar {
        height: 100%; /* Full-height: remove this if you want "auto" height */
        width: var(--margin-width-pct); /* Set the width of the sidebar */
        position: fixed; /* Fixed Sidebar (stay in place on scroll) */
        z-index: 1; /* Stay on top */
        top: 0; /* Stay at the top */
        left: 0;
        background-color: #9aa; /* Black */
        overflow-x: hidden; /* Disable horizontal scroll */
    }

    .main {
        margin-left: var(--margin-width-pct); /* Same as the width of the sidebar */
        padding:20px;
    }

    .close-button {
        position: absolute;
        top: 0;
        right: 0.5rem;
        color: white;
        font-size: 20px;
        cursor: pointer;
    }
</style>



