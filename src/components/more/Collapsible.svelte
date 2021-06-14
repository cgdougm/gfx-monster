<script>
    export let label = "Details"
    export let depth = 0

    import { fade } from 'svelte/transition';
    import OpenClose from '../button/OpenClose.svelte'

    let collapsible

    let is_open = false
    $: content_style = is_open ? "display:block" : "display:none" 

    const button_handler = () => {
        is_open = !is_open
    }
</script>


<main>
    <button 
        type="button" 
        bind:this={collapsible}
        on:click={button_handler}
        class:active={is_open}
        style={`padding-left: ${depth+1}rem`}
    >
        <OpenClose state={is_open}>
            {label}
        </OpenClose>
    </button>
    {#if is_open}
        <div class="content" style={content_style} transition:fade="{{ duration: 500 }}">
            <slot></slot>
        </div>
    {/if}
</main>


<style>
button {
    background-color: #aaa;
    cursor: pointer;
    padding: 6px;
    padding-left: 12px;
    width: 100%;
    text-align: left;
    outline:none;
    border: none;
    font-weight: 700;
}

.active {
    border-top-left-radius: 18px;
    border-top-right-radius: 18px;
    /* padding: 12px; */
    background-color: #888;
}

button:hover {
  background-color: #aaa;
}

/* Style the collapsible content. Note: hidden by default */
.content {
  margin: 0;
  /* padding: 6px; */
  display: none;
  overflow: hidden;
  /* background-color: #f1f1f1; */
}   

</style>