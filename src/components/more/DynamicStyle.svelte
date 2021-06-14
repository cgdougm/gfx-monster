<script>
    // From https://svelte.dev/repl/8123d474edb04f198c3b83363716a709?version=3.23.2
	let fg_color = "#11aa00"
	let styles = {
		'bg-color': '#ffff00',
		'fg-color': fg_color
	};
	
	$: cssVarStyles = Object.entries(styles)
		.map(([key, value]) => `--${key}:${value}`)
		.join(';');

    const log = () => {
        console.dir(styles)
    }
</script>

<div class="container" style="{cssVarStyles}">
    &nbsp;
	<label>
        <input on:change={log} type="color" bind:value={styles['fg-color']} /> 
		FG
	</label>
    &nbsp;
	<label>
		<input on:change={log} type="color" bind:value={styles['bg-color']} /> 
		BG
	</label>
		
</div>

<style>
    .container {
        display: flex;
    }
</style>

