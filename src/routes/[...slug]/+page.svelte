<!-- src/routes/+page.svelte -->

<script>
  import { StoryblokComponent } from "@storyblok/svelte";

  export let data;
</script>

<StoryblokComponent blok={data.story.content} />
