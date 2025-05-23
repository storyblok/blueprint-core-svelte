import { apiPlugin, storyblokInit, useStoryblokApi } from "@storyblok/svelte";
import Teaser from "$lib/Teaser.svelte"
import Feature from "$lib/Feature.svelte"
import Grid from "$lib/Grid.svelte"
import Page from "$lib/Page.svelte"

export async function load(params) {
  const isPreview = Boolean(
    (new URLSearchParams(params.url.searchParams)).get("_storyblok") || params.url.hostname.includes("localhost")
  )

  storyblokInit({
    accessToken: isPreview
      ? import.meta.env.VITE_STORYBLOK_DELIVERY_API_TOKEN_PREVIEW
      : import.meta.env.VITE_STORYBLOK_DELIVERY_API_TOKEN_PUBLIC,
    apiOptions: {
      region: 'eu', // Choose the correct region from your Space.
    },
    use: [apiPlugin],
    components: {
      teaser: Teaser,
      feature: Feature,
      grid: Grid,
      page: Page,
    }
  });

  const storyblokAPI = await useStoryblokApi();

  return {
    storyblokAPI,
    isPreview
  };
}
