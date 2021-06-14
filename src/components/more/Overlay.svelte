<script>
    export let active
    import { onMount, createEventDispatcher } from 'svelte'
    import CloseButton from '../button/CloseButton.svelte'

    const dispatch = createEventDispatcher()
    const forward_click = (event) => {
        console.dir(event)
        dispatch('click', event.detail)
    }

    // From https://tympanus.net/codrops/2021/01/19/drawing-2d-metaballs-with-webgl2
    // Create our canvas and obtain it's WebGL2RenderingContext 
    //const canvas = document.createElement('canvas')
    let canvas, gl

    onMount(() => {
        const gl = canvas.getContext('webgl2')
        if (!gl) {
            window.alert("no GL")
        }
        /* Size our canvas and listen for resize events */
        handle_resize()
        //window.addEventListener('resize', handle_resize)
        /* Issue first frame paint */
        requestAnimationFrame(update_frame)

    })        

    /* Append our canvas to the DOM and set its background-color with CSS */
    //canvas.style.backgroundColor = 'rgba(50, 50, 50, 0.5)'
    //document.body.appendChild(canvas)

    const update_frame = () => {
        /* Set our program viewport to fit the actual size of our monitor with devicePixelRatio into account */
        if (gl) {
            gl.viewport(0, 0, canvas.width, canvas.height)
            /* Set the WebGL background colour to be transparent */
            gl.clearColor(0, 0, 0, 0)
            /* Clear the current canvas pixels */
            gl.clear(gl.COLOR_BUFFER_BIT)
            
            /* Issue next frame paint */
            requestAnimationFrame(update_frame)
        }
    }

    const handle_resize = () => {
        /*
        We need to account for devicePixelRatio when sizing our canvas.
        We will use it to obtain the actual pixel size of our viewport and size our canvas to match it.
        We will then downscale it back to CSS units so it neatly fills our viewport and we benefit from downsampling antialiasing
        We also need to limit it because it can really slow our program. Modern iPhones have devicePixelRatios of 3. This means rendering 9x more pixels each frame!
        
        More info: https://webglfundamentals.org/webgl/lessons/webgl-resizing-the-canvas.html 
        */
        const dpr = devicePixelRatio > 2 ? 2 : devicePixelRatio
        canvas.width = innerWidth * dpr
        canvas.height = innerHeight * dpr
        canvas.style.width = `${innerWidth}px`
        canvas.style.height = `${innerHeight}px`
    }
</script>

<svelte:window on:resize={handle_resize}/>

<div class="overlay" style={active? "" : "display: none"}>
    <CloseButton on:click={forward_click} />
    <canvas bind:this={canvas} ></canvas>
</div>

<style>
    .overlay {
        position: fixed;
        left: 0;
        top: 0;
        z-index: 100;
    }

    canvas {
        /* background: rgba(50, 50, 50, 0.5); */
        background-image: radial-gradient(
                rgba(50, 50, 50, 0.25), 
                rgba(0, 0, 0, 0.8))
    }
</style>