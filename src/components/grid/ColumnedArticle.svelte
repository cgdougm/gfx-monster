<script>
    export let column_count = 3
</script>


<div id="columnarticle" style="--column-count: {column_count}">
    <article>
        <slot></slot>
    </article>
</div>

<style>
  #columnarticle {
      column-count: var(--column-count);
  }

  article {
    text-align: left;
  }
</style>
