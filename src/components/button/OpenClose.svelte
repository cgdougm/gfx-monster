<script>
    export var state = true
    $: rotation = state ? "90" : "0"
    $: color = state ? "black" : "gray"
</script>

<div>
    <span>
        <svg height="16" width="16">
            <g id="transform" transform="rotate({rotation})">
                <polygon points="0,0 15,7 0,15" style="fill:{color}" />
            </g>
        </svg>
    </span>
    <span>
        <slot />
    </span>    
</div>

<style>
    #transform {
        display: inline-block;
        transform-origin: center;
    }
</style>
