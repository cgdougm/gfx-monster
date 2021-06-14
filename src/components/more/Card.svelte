<script>
    // import { get_placeholder } from "../../placeholder";
    
    export let title = 'John Doe'
    export let subtitle = 'Architect & Engineer'
    export let width = 240
    export let height = 360
    export let alt = "placeholder"
    export let src = "./images/placeholder.png"
    export let hover = false

</script>

<div class="card" class:hover={hover}>
    <img id="cardimage" {src} {width} {height} {alt} style="width:90%">
    <div class="container">
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
    </div>
</div>

<style>
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}

#cardimage {
    margin-top: 0.5rem;
}

h3 {
    font-size: 1.5rem;
    letter-spacing: -0.1rem;
    line-height: 90%;
}

h4 {
    font-size: 1rem;
}

/* On mouse-over, add a deeper shadow */
.hover:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.5);
    position: relative; 
    transform: translate(-0.2rem, -0.2rem);
    transition: 0.3s;
}

/* Add some padding inside the card container */
.container {
    text-align: left;
    padding: 12px;
}
</style>