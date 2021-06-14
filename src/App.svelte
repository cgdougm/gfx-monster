<script>
	let innerWidth = 100
	$: column_count = Math.ceil(innerWidth / 300) - 1
	
	// import { onMount } from 'svelte'
	import ColumnCards from './components/grid/ColumnCards.svelte'
	import ColumnedArticle from './components/grid/ColumnedArticle.svelte'
	import TabGroup from './components/menus/TabGroup.svelte'
	import SidebarFixed from './components/menus/SidebarFixed.svelte'
	import Collapsible from './components/more/Collapsible.svelte'
	import CloseButton from './components/button/CloseButton.svelte'
	import Overlay from './components/more/Overlay.svelte'
	import Dropzone from './components/other/Dropzone.svelte'
	import DynamicStyle from './components/more/DynamicStyle.svelte'

	const label = "Details"

	import make_test_data from './test_data'

	let test_data = make_test_data({ hover: true, width: 80, height: 120})
	const cards = test_data.cards
	const tabs = test_data.tabs

	let active_tab = tabs[0]
	const switch_tab_handler = (event) => {
		active_tab = event.detail
	}

	const close_sidebar = (event) => {
		console.log("CLOSE sidebar")
	}

	let overlay_active = false;
	const close_overlay = (event) => {
		console.log("CLOSE overlay")
		overlay_active=false
	}

	const close_button_handler = () => {
		console.log("close button handler")
	}

	// onMount(() => {
	// })
</script>

<svelte:window bind:innerWidth={innerWidth}/>

<main>
	<Overlay active={overlay_active} on:click={close_overlay} />
	<SidebarFixed width_pct={20} on:click={close_sidebar}>
		<div slot="sidebar" class="sidebar-content">
			{@html test_data.article_text}
		</div>
		
		<div slot="main">
			<div style="display:flex;">
				<!-- <Dropzone/> -->
				<h2>&nbsp;Projects</h2>
				<!-- <DynamicStyle let:fg_color /> -->
				<!-- <CloseButton color={fg_color} on:click={close_button_handler}/> -->
			</div>
			<div class="section-div">
				<Collapsible label="Collapsible Demo" depth={0}>
					{#each tabs as tab}
					<Collapsible label={tab.title} depth={1}>
						<ColumnCards cards={tab.content} {column_count} />
					</Collapsible>
					{/each}
				</Collapsible>
			</div>
			<TabGroup {tabs} on:switch_tab={switch_tab_handler}>
				<ColumnCards cards={active_tab.content} {column_count} />
			</TabGroup>
			
			<div class="section-div">
				<Collapsible label="Columned Article Demo">
					<ColumnedArticle {column_count}>
						{@html test_data.article_text}
					</ColumnedArticle>
				</Collapsible>
			</div>
		</div>
	</SidebarFixed>

</main>

<style>
	main {
		padding: 1rem;
		max-width: 12rem;
		margin: 0 auto;
	}

	h2 {
		color: #18676d;
		font-size: 2rem;
		font-weight: 700;
		letter-spacing: -0.1rem;
	}

	h3 {
		font-size: 1rem;
		font-weight: 700;
		letter-spacing: 0.1rem;
	}

	.section-div {
		margin-top: 1rem;
	}

	.sidebar-content {
		padding: 12px;
	}

	:global(article > h3) {
		margin-bottom: 0.25rem;
	}

	:global(article > p) {
		text-indent: 0.75rem;
	}

	:global(p + h4) {
		margin-top: 0.5rem;
	}

	:global(h3 + p) {
		text-indent: 0;
	}

	:global(p) {
		line-height: 1.25rem;
	}

	:global(h1, h2, h3, h4, p) {
		margin-bottom: 0;
		margin-top: 0;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	@keyframes fadeEffect {
		from {opacity: 0;}
		to {opacity: 0.2;}
	}

</style>