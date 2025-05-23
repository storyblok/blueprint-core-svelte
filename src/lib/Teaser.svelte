<!-- src/lib/Teaser.svelte -->

<script> 
  import { storyblokEditable } from "@storyblok/svelte"

  export let blok;
</script>

<div class="teaser" use:storyblokEditable={blok}>
  <h1>{blok.headline}</h1>
</div>
