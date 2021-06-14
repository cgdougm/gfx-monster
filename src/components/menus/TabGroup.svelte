
<script>
    export let tabs
    export let active_tab = tabs[0]
// import App from '../../App.svelte'
// import ColumnedArticle from '../../ColumnedArticle.svelte'
// import ColumnCards from '../grid/ColumnCards.svelte'
  import Card from '../more/Card.svelte'

  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  const switch_handler = (tab) => {
    dispatch('switch_tab', tab)
    active_tab = tab
  }

</script>

  <div class="parent">
    {#each tabs as tab}
      <button class="box" class:active={tab === active_tab} on:click={switch_handler(tab)}>{tab.title}</button>
    {/each}
  </div>
  <slot/>


<style>

  .parent {
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
  }

  div {
    /* background-color: #ddd; */
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .25))
  }

  button {
    flex: 1 1 10%; /*  Stretching: */
    flex: 0 1 10%; /*  No stretching: */
    margin: 6px;
    margin-top: 20px;
    margin-bottom: 0;
    background-color: #999;
    float: left;
    /* background: transparent; */
    cursor: pointer;
    /* padding: 14px 16px; */
    /* transition: 0.3s; */
    font-weight: inherit;
    border: none;
    color: white;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }
  
  /* Change background color of buttons on hover */
  button:hover {
    background-color: #555;
    color: white;
  }
  
  /* Create an active/current tablink class */
  .active {
    background-color: white;
    font-weight: 800;
    color: black;
  }
  
</style>
    