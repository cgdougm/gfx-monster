<script>
    // Not much here... https://www.w3schools.com/html/html5_draganddrop.asp

	let drop_border_idle_color = "grey"
	let drop_border_active_color = "teal"
	let drop_border_color = drop_border_idle_color
	let drop_label_idle = "&plus;"
	let drop_label_active = "UPLOAD"
	let drop_zone_width = "4rem"
	let drop_zone
	let hovering
	$: dragged_over = hovering ? "Upload..." : "&uarr;"

	// import { footage } from './stores.js'
	// import Toast from './Toast.svelte'

	// import mime from 'mime';

	// import FaFolder from 'svelte-icons/fa/FaFolder.svelte'
	// import FaFolderPlus from 'svelte-icons/fa/FaFolderPlus.svelte'

	// const { ipcRenderer, dialog } = require('electron')


	function handleDragEnter(e) {
		console.log("ENTER")
		drop_border_color = drop_border_active_color;
		hovering = true;
    }

    function handleDragLeave(e) {
		console.log("LEAVE")
		drop_border_color = drop_border_idle_color;
		hovering = false;
    }

    function handleDragDrop(e) {
        e.preventDefault();
		hovering = false;
		let dropped_files = Array.from(e.dataTransfer.files)
		console.log(`FILES: ${dropped_files.length}`)
		console.dir(dropped_files)
		// console.log(element.name, element.lastModified, element.size, element.type, element.path);	
		let dropped_paths = dropped_files.map(element => element.name)
		console.log(`Elements: ${dropped_paths}`) 
		// window.pushToast(`Processing ${dropped_paths.length} files/folders`)

		dropped_paths.forEach(path => {		
			console.log("sending path to main:", path)
			// ipcRenderer.invoke("process-video-file", path)
			// 	.then(result => {
			// 		console.log("Result from invoke:", result);			
			// 	})
			// 	.catch(console.log)
		});
	}
	
	// ipcRenderer.on('video-file-metadata', (event, metadata) => {
	// 	console.log("adding new footage")
	// 	$footage = [...$footage, metadata]
	// 	console.log("footage length: ", $footage.length);
	// 	drop_border_color = drop_border_active_color;
	// })

	// ipcRenderer.on("update", (event, data) => {
	// 	console.log(`--- UPDATE ${data} ---`)
	// })
	
	function handleDragStart(e) {
        e.dataTransfer.dropEffect = "copy"
        e.dataTransfer.setData("text", e.target.getAttribute('id'))
	}

    function handleDragEnd(e) {
      	dropped_in = false
	}

	function drop_zone_click_handler(e) {
		console.log("CLICK")
		// console.dir(e)
		// ipcRenderer
		// 	.invoke("open-file-dialog", "ingest")
		// 	.then(console.dir)
		// 	.catch(console.log)
	}

</script>

<div on:click={e => drop_zone_click_handler(e)} class="outer">
	<div id="drop_zone" 
		on:dragenter={handleDragEnter} 
		on:dragleave={handleDragLeave}  
		on:drop={handleDragDrop} 
		bind:this={drop_zone} 
		ondragover="return false"
		on:dblclick={drop_zone_click_handler} 
		
	>
		<p style={`width: ${drop_zone_width}; text-align: center;`}>{@html dragged_over}</p>
		<!-- <div class="icon">
			{#if dragged_over}
                <span>&plus;</span>
			{:else}
                <span>&boxbox;</span>
			{/if}
		</div> -->
	</div>
</div>

<!-- <Toast /> -->


<style>

	#drop_zone {
		/* width: var(--drop-zone-width); */
		border-color: var(--border-color);
		border-width: 0.15em;
		border-radius: 0.5rem;
		border-style: dashed;
		padding: 0.85rem;
    }

	#drop_zone:hover {
		border-width: 0.25em;
		padding: 0.75rem;
		border-color: teal;
		transition: border-color 0.3s;
	}

	.icon {
		width: 16px;
		height: 16px;
	}

</style>