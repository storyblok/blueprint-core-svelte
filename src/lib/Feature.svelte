<!-- src/lib/Feature.svelte -->

<script> 
  import { storyblokEditable } from "@storyblok/svelte"

  export let blok;
</script>

<div class="feature" use:storyblokEditable={blok}>
  <p>{blok.name}</p>
</div>
